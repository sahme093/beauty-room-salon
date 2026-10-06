import { useMemo } from 'react';
import { PHONE_E164 } from './data.js';

// Parse a yyyy-mm-dd input value at local noon so the weekday never shifts with timezone.
const parseDate = (value) => (value ? new Date(value + 'T12:00') : null);

export function useBookingRequest(form) {
  return useMemo(() => {
    const date = parseDate(form.date);
    const isSunday = date ? date.getDay() === 0 : false;
    const fmtDate = date
      ? date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      : '';

    const lines = [
      "Hi! I'd like to request an appointment at The Beauty Room.",
      'Name: ' + (form.name || '—'),
      'Service: ' + form.service,
      'Preferred: ' + (fmtDate ? fmtDate + ', ' : '') + form.time.toLowerCase(),
    ];
    if (form.notes) lines.push('Notes: ' + form.notes);
    const body = lines.join('\n');

    return {
      body,
      isSunday,
      smsHref: 'sms:' + PHONE_E164 + '?&body=' + encodeURIComponent(body),
    };
  }, [form]);
}
