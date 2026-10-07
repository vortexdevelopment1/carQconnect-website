// Mock resolver data for the public QR portal. In production this comes
// from the QR resolution API (GET /qr/:id) — not a database lookup from
// the frontend.

export type QrStatus = "active" | "inactive" | "suspended" | "not_found";

export type QrRecord = {
  id: string;
  status: QrStatus;
  vehicleLabel: string; // masked/partial, never the full private record
  safetyStatus: string;
  actions: {
    call: boolean;
    message: boolean;
    report: boolean;
    emergency: boolean;
  };
};

const records: Record<string, QrRecord> = {
  "8F2K91": {
    id: "8F2K91",
    status: "active",
    vehicleLabel: "MP09 XX 1234",
    safetyStatus: "Active",
    actions: { call: true, message: true, report: true, emergency: true },
  },
  "INACTIVE01": {
    id: "INACTIVE01",
    status: "inactive",
    vehicleLabel: "",
    safetyStatus: "",
    actions: { call: false, message: false, report: false, emergency: false },
  },
  "SUSPENDED01": {
    id: "SUSPENDED01",
    status: "suspended",
    vehicleLabel: "",
    safetyStatus: "",
    actions: { call: false, message: false, report: false, emergency: false },
  },
};

export function resolveQr(id: string): QrRecord {
  return records[id] ?? { id, status: "not_found", vehicleLabel: "", safetyStatus: "", actions: { call: false, message: false, report: false, emergency: false } };
}
