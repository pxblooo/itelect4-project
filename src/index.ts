import type { User, Item, Claim, ApiResponse, ItemUpdate, ItemPreview, PublicItem, ItemTypeCount, StringOrNumber } from "../types/index";

import { ItemStatus, ClaimStatus } from "../types/index";

// ===== PRIMITIVE TYPE ANNOTATIONS =====
// Variables with explicit types
const projectName: string = "itelect4-project";
const currentYear: number = 2026;
const isFullStack: boolean = true;
const nothing: null = null;
const notSet: undefined = undefined;
// Function: typed parameters + typed return value
function greet(name: string, year: number): string {
return `Welcome to ${name} -- AY ${year}!`;
}
// void: function that does NOT return a value
function logMessage(message: string): void {
console.log(message);
}
logMessage(greet(projectName, currentYear));

// ===== SPECIAL TYPES =====
// any -- disables TypeScript type checking
// [!] Avoid using this; it defeats the purpose of TypeScript
let anything: any = "hello";
anything = 42; // No error
anything = true; // No error
// unknown -- the safer version of any
// You MUST check the type before using it
let userInput: unknown = "test";
if (typeof userInput === "string") {
console.log(userInput.toUpperCase()); // OK -- TypeScript knows it's a string here
}
// never -- a function that NEVER returns
// Used when a function always throws an error or loops forever
function throwError(message: string): never {
throw new Error(message);
}

// ===== USING INTERFACES =====
const student: User = {
id: 1,
name: "Juan dela Cruz",
email: "juan@example.com",
role: "student",
isActive: true,
};
const admin: User = {
  id: 1,
  name: "Security Office",
  email: "security@campus.edu",
  role: "security_admin",
  isActive: true,
};

const item: Item = {
  id: 1,
  description: "Black umbrella left in Room 302",
  location: "Room 302",
  type: "found",
  reportedBy: admin.id,
  reportedAt: new Date(),
  status: ItemStatus.Open,
};

console.log(student);
console.log(item);


// Narrowing with typeof
// Without the if-check, TypeScript would error:
// Property 'toUpperCase' does not exist on type 'number'
function processInput(input: StringOrNumber): string {
if (typeof input === "string") {
return input.toUpperCase(); // TypeScript knows: input is string here
}
return input.toFixed(2); // TypeScript knows: input is number here
}
// Narrowing with instanceof
// Used with class instances like Date, Error, etc.
function formatDate(value: string | Date): string {
if (value instanceof Date) {
return value.toLocaleDateString(); // TypeScript knows: it's a Date
}
return value; // TypeScript knows: it's a string
}
console.log(processInput("hello")); // HELLO
console.log(processInput(3.14159)); // 3.14
console.log(formatDate(new Date())); // e.g. 7/4/2026

// ===== GENERIC FUNCTIONS =====
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find((i) => i.id === id);
}

const firstItem = getFirst<Item>([item]);
const foundItem = getById<Item>([item], 1);
console.log(firstItem?.description);
console.log(foundItem?.location);

// ===== GENERIC INTERFACE IN USE =====
const itemResponse: ApiResponse<Item> = {
  success: true,
  data: item,
};
console.log(itemResponse.data.location);

// ===== UTILITY TYPES IN USE =====
const patch: ItemUpdate = { status: ItemStatus.Claimed };
const preview: ItemPreview = { id: 1, description: "Black umbrella", status: ItemStatus.Open };
const typeCount: ItemTypeCount = { lost: 3, found: 5 };

// ===== ENUMS IN USE =====
console.log(ItemStatus[item.status]); // "Open"

const claim: Claim = {
  id: 1,
  itemId: item.id,
  claimantId: student.id,
  submittedAt: new Date(),
  status: ClaimStatus.Pending,
};
console.log(claim.status); // "pending"