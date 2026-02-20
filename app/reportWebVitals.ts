import type { ReportCallback } from"web-vitals";

import { sendWebVitals } from"@/lib/analytics/perf";

export function reportWebVitals(metric: Parameters<ReportCallback>[0]) {
 void sendWebVitals({
 name: metric.name,
 value: metric.value,
 id: metric.id
 });
}
