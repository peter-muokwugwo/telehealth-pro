
export type ServiceOption = {
    value: string;
    label: string;
}

export const serviceOptions: ServiceOption[] = [
  { value: "primary-care", label: "Primary Care" },
  { value: "urgent-care", label: "Urgent Care" },
  { value: "mental-health", label: "Mental Health" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "cardiology", label: "Cardiology" },
  { value: "dermatology", label: "Dermatology" },
  { value: "womens-health", label: "Women's Health" },
  { value: "other", label: "Other (specify in message)" },
];
