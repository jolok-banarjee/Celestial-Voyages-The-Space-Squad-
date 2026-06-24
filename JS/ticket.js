/* ============================================
   TICKET GENERATOR - Fixed Version
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const depart = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const land = new Date(depart.getTime() + 180 * 24 * 60 * 60 * 1000);
    document.getElementById('departDate').value = formatDateTimeLocal(depart);
    document.getElementById('landDate').value = formatDateTimeLocal(land);
});

function formatDateTimeLocal(date) {
    const pad = n => n.toString().padStart(2, '0');
    return date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate()) + 'T' + pad(date.getHours()) + ':' + pad(date.getMinutes());
}

function formatDateTime(dateStr) {
    const date = new Date(dateStr);
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    return months[date.getMonth()] + ' ' + date.getDate().toString().padStart(2,'0') + ', ' + date.getFullYear() + ' ' + date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    return months[date.getMonth()] + ' ' + date.getDate().toString().padStart(2,'0') + ', ' + date.getFullYear();
}

function formatTime(dateStr) {
    const date = new Date(dateStr);
    return date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0');
}

function formatDOB(dateStr) {
    const date = new Date(dateStr);
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    return months[date.getMonth()] + ' ' + date.getDate().toString().padStart(2,'0') + ', ' + date.getFullYear();
}

function generateTicket() {
    const form = document.getElementById('ticketForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const name = document.getElementById('passengerName').value.toUpperCase();
    const dob = document.getElementById('dob').value;
    const from = document.getElementById('fromDest').value.toUpperCase();
    const to = document.getElementById('toDest').value.toUpperCase();
    const flight = document.getElementById('flightNum').value.toUpperCase();
    const seat = document.getElementById('seatNum').value.toUpperCase();
    const depart = document.getElementById('departDate').value;
    const land = document.getElementById('landDate').value;
    const launch = document.getElementById('launchSite').value.toUpperCase();
    const landing = document.getElementById('landingSite').value.toUpperCase();

    document.getElementById('dispName').textContent = name;
    document.getElementById('dispNameStub').textContent = name;
    document.getElementById('dispFrom').textContent = from;
    document.getElementById('dispFromStub').textContent = from;
    document.getElementById('dispTo').textContent = to;
    document.getElementById('dispToStub').textContent = to;
    document.getElementById('dispFlight').textContent = flight;
    document.getElementById('dispSeat').textContent = seat;
    document.getElementById('dispSeat2').textContent = seat;
    document.getElementById('dispSeatStub').textContent = seat;
    document.getElementById('dispDob').textContent = formatDOB(dob);
    document.getElementById('dispLaunch').textContent = launch;
    document.getElementById('dispLanding').textContent = landing;
    document.getElementById('dispDepart').textContent = formatDateTime(depart);
    document.getElementById('dispLand').textContent = formatDateTime(land);
    document.getElementById('dispBoarding').textContent = formatTime(depart);
    document.getElementById('dispDateStub').textContent = formatDate(depart);

    document.getElementById('ticketPreview').style.display = 'block';
    document.getElementById('ticketPreview').scrollIntoView({ behavior: 'smooth' });
}

function printTicket() {
    const ticket = document.getElementById('boardingPass');
    const ticketHTML = ticket.outerHTML;
    const printWindow = window.open('', '_blank');

    var html = '<!DOCTYPE html><html><head><title>Boarding Pass - Celestial Voyages</title>';
    html += '<style>';
    html += '@page { size: A4 landscape; margin: 0; }';
    html += '* { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; margin: 0; padding: 0; box-sizing: border-box; }';
    html += 'html, body { background: white !important; width: 100%; height: 100%; overflow: hidden; }';
    html += 'body { font-family: "Segoe UI", "Arial Black", sans-serif; }';
    html += '.print-container { width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; padding: 0; }';
    html += '.boarding-pass { width: 100%; max-width: 1000px; background: linear-gradient(135deg, #1a0a2e 0%, #0d0221 50%, #1a0a2e 100%); border-radius: 12px; overflow: hidden; position: relative; font-family: "Segoe UI", "Arial Black", sans-serif; }';
    html += '.ticket-top { display: flex; align-items: center; justify-content: space-between; padding: 0.8rem 1.5rem; background: linear-gradient(90deg, #1a1a4e 0%, #2d2d7a 30%, #1a1a4e 60%, #2d2d7a 100%); border-bottom: 2px solid rgba(255,255,255,0.1); position: relative; z-index: 1; }';
    html += '.ticket-logo { display: flex; align-items: center; gap: 0.5rem; }';
    html += '.logo-icon { font-size: 1.5rem; color: #f4d03f; text-shadow: 0 0 10px rgba(244,208,63,0.5); }';
    html += '.logo-text { display: flex; flex-direction: column; line-height: 1; }';
    html += '.logo-main { font-size: 0.75rem; font-weight: 800; letter-spacing: 3px; color: #fff; text-transform: uppercase; }';
    html += '.logo-sub { font-size: 0.6rem; font-weight: 600; letter-spacing: 4px; color: #f4d03f; text-transform: uppercase; }';
    html += '.ticket-title { font-size: 1.4rem; font-weight: 300; color: #fff; letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 0 20px rgba(255,255,255,0.3); }';
    html += '.ticket-seat { display: flex; flex-direction: column; align-items: center; line-height: 1; }';
    html += '.seat-label { font-size: 0.6rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; }';
    html += '.seat-num { font-size: 1.6rem; font-weight: 800; color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }';
    html += '.ticket-qr { width: 50px; height: 50px; }';
    html += '.qr-svg, .qr-large, .qr-small { width: 100%; height: 100%; }';
    html += '.ticket-body { display: flex; min-height: 280px; position: relative; z-index: 1; background: linear-gradient(180deg, rgba(26,10,46,0.9) 0%, rgba(13,2,33,0.95) 100%); background-size: cover; }';
    html += '.ticket-left-bar { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0.5rem 0.3rem; border-right: 2px dashed rgba(255,255,255,0.15); background: linear-gradient(180deg, #ff6b35 0%, #c73e00 100%); width: 50px; flex-shrink: 0; position: relative; }';
    html += '.barcode-vertical { display: flex; flex-direction: column; gap: 1px; align-items: center; margin-bottom: 0.5rem; }';
    html += '.barcode-line { width: 25px; height: 3px; background: #000; border-radius: 1px; }';
    html += '.barcode-line:nth-child(odd) { width: 20px; } .barcode-line:nth-child(3n) { width: 28px; height: 4px; } .barcode-line:nth-child(5n) { width: 15px; } .barcode-line:nth-child(7n) { width: 30px; height: 5px; }';
    html += '.boarding-pass-text { writing-mode: vertical-rl; text-orientation: mixed; font-size: 0.65rem; font-weight: 800; letter-spacing: 2px; color: #000; text-transform: uppercase; transform: rotate(180deg); white-space: nowrap; }';
    html += '.ticket-panel { flex: 1; padding: 1.2rem 1rem; display: flex; flex-direction: column; justify-content: center; }';
    html += '.left-panel { border-right: 1px solid rgba(255,255,255,0.08); }';
    html += '.from-to-row { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem; }';
    html += '.from-section, .to-section { text-align: center; }';
    html += '.from-section .label, .to-section .label { display: block; font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.2rem; }';
    html += '.from-section .value, .to-section .value { font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: 1px; text-shadow: 0 0 15px rgba(255,255,255,0.3); }';
    html += '.rocket-icon { font-size: 1.5rem; filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); }';
    html += '.info-grid { display: grid; grid-template-columns: 1fr; gap: 0.6rem; }';
    html += '.info-item { display: flex; flex-direction: column; }';
    html += '.info-item .label { font-size: 0.6rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 0.1rem; text-decoration: underline; text-decoration-color: rgba(255,255,255,0.2); }';
    html += '.info-item .value { font-size: 0.95rem; font-weight: 700; color: #fff; letter-spacing: 0.5px; }';
    html += '.ticket-center-qr { width: 120px; padding: 0.5rem; display: flex; align-items: center; justify-content: center; border-left: 1px solid rgba(255,255,255,0.08); border-right: 1px solid rgba(255,255,255,0.08); }';
    html += '.qr-large { filter: drop-shadow(0 0 10px rgba(255,255,255,0.2)); }';
    html += '.perforation { width: 20px; display: flex; align-items: center; justify-content: center; border-left: 2px dashed rgba(255,255,255,0.3); position: relative; }';
    html += '.perforation-dots { display: flex; flex-direction: column; gap: 8px; }';
    html += '.perforation-dots span { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.2); }';
    html += '.ticket-stub { width: 220px; flex-shrink: 0; display: flex; flex-direction: column; background: linear-gradient(180deg, #1a1a4e 0%, #0d0d2a 100%); position: relative; overflow: hidden; }';
    html += '.ticket-stub::before { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: radial-gradient(ellipse at 80% 50%, rgba(0,200,150,0.1) 0%, transparent 60%); pointer-events: none; }';
    html += '.stub-top { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.8rem; background: linear-gradient(90deg, #1a1a4e 0%, #2d2d7a 100%); border-bottom: 1px solid rgba(255,255,255,0.1); }';
    html += '.stub-logo { display: flex; align-items: center; gap: 0.3rem; }';
    html += '.stub-logo .logo-icon { font-size: 1rem; } .stub-logo .logo-main { font-size: 0.55rem; letter-spacing: 2px; } .stub-logo .logo-sub { font-size: 0.45rem; letter-spacing: 2px; }';
    html += '.stub-qr { width: 35px; height: 35px; } .stub-seat .seat-label { font-size: 0.5rem; } .stub-seat .seat-num { font-size: 1.2rem; }';
    html += '.stub-body { padding: 0.8rem; flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }';
    html += '.stub-info { display: flex; flex-direction: column; }';
    html += '.stub-info .label { font-size: 0.55rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }';
    html += '.stub-info .value { font-size: 0.8rem; font-weight: 700; color: #fff; }';
    html += '.boarding-time { font-size: 1.3rem !important; color: #f4d03f !important; text-shadow: 0 0 10px rgba(244,208,63,0.3); }';
    html += '.stub-from-to { display: flex; gap: 1rem; } .stub-from-to > div { display: flex; flex-direction: column; }';
    html += '.stub-from-to .label { font-size: 0.5rem; color: rgba(255,255,255,0.5); text-transform: uppercase; }';
    html += '.stub-from-to .value { font-size: 0.75rem; font-weight: 700; color: #fff; }';
    html += '.stub-barcode { padding: 0.5rem 0.8rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }';
    html += '.barcode-h { display: flex; gap: 1px; align-items: flex-end; height: 40px; }';
    html += '.barcode-h-line { width: 3px; background: #fff; border-radius: 1px; }';
    html += '.barcode-h-line:nth-child(1) { height: 35px; width: 2px; } .barcode-h-line:nth-child(2) { height: 28px; width: 4px; } .barcode-h-line:nth-child(3) { height: 32px; width: 2px; } .barcode-h-line:nth-child(4) { height: 25px; width: 3px; } .barcode-h-line:nth-child(5) { height: 38px; width: 5px; } .barcode-h-line:nth-child(6) { height: 30px; width: 2px; } .barcode-h-line:nth-child(7) { height: 35px; width: 4px; } .barcode-h-line:nth-child(8) { height: 22px; width: 2px; } .barcode-h-line:nth-child(9) { height: 36px; width: 3px; } .barcode-h-line:nth-child(10) { height: 28px; width: 5px; } .barcode-h-line:nth-child(11) { height: 33px; width: 2px; } .barcode-h-line:nth-child(12) { height: 26px; width: 4px; } .barcode-h-line:nth-child(13) { height: 37px; width: 2px; } .barcode-h-line:nth-child(14) { height: 31px; width: 3px; } .barcode-h-line:nth-child(15) { height: 24px; width: 5px; } .barcode-h-line:nth-child(16) { height: 35px; width: 2px; } .barcode-h-line:nth-child(17) { height: 29px; width: 4px; } .barcode-h-line:nth-child(18) { height: 34px; width: 2px; } .barcode-h-line:nth-child(19) { height: 27px; width: 3px; } .barcode-h-line:nth-child(20) { height: 38px; width: 5px; } .barcode-h-line:nth-child(21) { height: 32px; width: 2px; } .barcode-h-line:nth-child(22) { height: 25px; width: 4px; } .barcode-h-line:nth-child(23) { height: 36px; width: 2px; } .barcode-h-line:nth-child(24) { height: 30px; width: 3px; } .barcode-h-line:nth-child(25) { height: 28px; width: 5px; }';
    html += '.barcode-text { font-size: 0.45rem; color: rgba(255,255,255,0.4); letter-spacing: 1px; text-transform: uppercase; }';
    html += '.ticket-bg-planet { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; background: radial-gradient(circle at 30% 30%, #ff6b35 0%, #c73e00 40%, #4a1a00 70%, transparent 100%); border-radius: 50%; opacity: 0.15; pointer-events: none; z-index: 0; }';
    html += '</style></head><body>';
    html += '<div class="print-container">' + ticketHTML + '</div>';
    html += '<script>window.onload = function() { setTimeout(function() { window.print(); setTimeout(function() { window.close(); }, 500); }, 500); };</script>';
    html += '</body></html>';

    printWindow.document.write(html);
    printWindow.document.close();
}

function downloadTicket() {
    alert('To save as image:\n1. Use your browser screenshot tool (Win+Shift+S or Cmd+Shift+4)\n2. Or right-click the ticket and select "Save image as..."\n3. For PDF: Use Print -> Save as PDF');
}
