// To parse this data:
//
//   import { Convert } from "./file";
//
//   const employee = Convert.toEmployee(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Employee {
    employee_id:   number;
    first_name:    FirstName;
    last_name:     LastName;
    email:         string;
    phone_number:  PhoneNumber;
    hire_date:     Date;
    birth_date:    Date;
    gender:        Gender;
    address:       string;
    city:          string;
    state:         string;
    zip_code:      string;
    country:       Country;
    department_id: number;
    position_id:   number;
    manager_id:    null;
}

export enum Country {
    Country0 = "Country0",
    Country1 = "Country1",
    Country2 = "Country2",
    Country3 = "Country3",
    Country4 = "Country4",
}

export enum FirstName {
    Andrew = "Andrew",
    Ava = "Ava",
    Chris = "Chris",
    Daniel = "Daniel",
    David = "David",
    Emily = "Emily",
    Emma = "Emma",
    Isabella = "Isabella",
    James = "James",
    Jane = "Jane",
    Jessica = "Jessica",
    John = "John",
    Matthew = "Matthew",
    Mia = "Mia",
    Michael = "Michael",
    Olivia = "Olivia",
    Robert = "Robert",
    Sarah = "Sarah",
    Sophia = "Sophia",
    William = "William",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export enum LastName {
    Anderson = "Anderson",
    Brown = "Brown",
    Davis = "Davis",
    Garcia = "Garcia",
    Gonzalez = "Gonzalez",
    Hernandez = "Hernandez",
    Jackson = "Jackson",
    Johnson = "Johnson",
    Jones = "Jones",
    Lee = "Lee",
    Lopez = "Lopez",
    Martin = "Martin",
    Martinez = "Martinez",
    Miller = "Miller",
    Moore = "Moore",
    Smith = "Smith",
    Taylor = "Taylor",
    Thomas = "Thomas",
    Williams = "Williams",
    Wilson = "Wilson",
}

export enum PhoneNumber {
    The1234567890 = "123-456-7890",
    The1234567891 = "123-456-7891",
    The1234567892 = "123-456-7892",
    The1234567893 = "123-456-7893",
    The1234567894 = "123-456-7894",
    The1234567895 = "123-456-7895",
    The1234567896 = "123-456-7896",
    The1234567897 = "123-456-7897",
    The1234567898 = "123-456-7898",
    The1234567899 = "123-456-7899",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toEmployee(json: string): Employee[] {
        return cast(JSON.parse(json), a(r("Employee")));
    }

    public static employeeToJson(value: Employee[]): string {
        return JSON.stringify(uncast(value, a(r("Employee"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Employee": o([
        { json: "employee_id", js: "employee_id", typ: 0 },
        { json: "first_name", js: "first_name", typ: r("FirstName") },
        { json: "last_name", js: "last_name", typ: r("LastName") },
        { json: "email", js: "email", typ: "" },
        { json: "phone_number", js: "phone_number", typ: r("PhoneNumber") },
        { json: "hire_date", js: "hire_date", typ: Date },
        { json: "birth_date", js: "birth_date", typ: Date },
        { json: "gender", js: "gender", typ: r("Gender") },
        { json: "address", js: "address", typ: "" },
        { json: "city", js: "city", typ: "" },
        { json: "state", js: "state", typ: "" },
        { json: "zip_code", js: "zip_code", typ: "" },
        { json: "country", js: "country", typ: r("Country") },
        { json: "department_id", js: "department_id", typ: 0 },
        { json: "position_id", js: "position_id", typ: 0 },
        { json: "manager_id", js: "manager_id", typ: null },
    ], false),
    "Country": [
        "Country0",
        "Country1",
        "Country2",
        "Country3",
        "Country4",
    ],
    "FirstName": [
        "Andrew",
        "Ava",
        "Chris",
        "Daniel",
        "David",
        "Emily",
        "Emma",
        "Isabella",
        "James",
        "Jane",
        "Jessica",
        "John",
        "Matthew",
        "Mia",
        "Michael",
        "Olivia",
        "Robert",
        "Sarah",
        "Sophia",
        "William",
    ],
    "Gender": [
        "Female",
        "Male",
    ],
    "LastName": [
        "Anderson",
        "Brown",
        "Davis",
        "Garcia",
        "Gonzalez",
        "Hernandez",
        "Jackson",
        "Johnson",
        "Jones",
        "Lee",
        "Lopez",
        "Martin",
        "Martinez",
        "Miller",
        "Moore",
        "Smith",
        "Taylor",
        "Thomas",
        "Williams",
        "Wilson",
    ],
    "PhoneNumber": [
        "123-456-7890",
        "123-456-7891",
        "123-456-7892",
        "123-456-7893",
        "123-456-7894",
        "123-456-7895",
        "123-456-7896",
        "123-456-7897",
        "123-456-7898",
        "123-456-7899",
    ],
};
