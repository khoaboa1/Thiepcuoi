import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [side, setSide] = useState('groom'); // groom = Nhà Trai, bride = Nhà Gái
  const [attending, setAttending] = useState('yes');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          side,
          attending,
          guests: Number(guests) || 1,
          message: message.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <section className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-gold/30 bg-white/70 p-8"
        >
          <div className="text-3xl">💌</div>
          <h3 className="heading mt-3">Cảm ơn bạn!</h3>
          <div className="divider" />
          <p className="text-sm text-mocha/70">
            Chúng tôi đã nhận được xác nhận của bạn. Hẹn gặp bạn trong ngày trọng đại!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        Xác nhận tham dự
      </motion.h2>
      <div className="divider" />

      <form onSubmit={submit} className="text-left space-y-5">
        <div>
          <label className="eyebrow text-[10px]">Họ và tên</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Nhập tên của bạn"
            className="mt-1 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 text-mocha placeholder:text-mocha/30"
          />
        </div>

        <div>
          <label className="eyebrow text-[10px]">Số điện thoại</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nhập số điện thoại"
            className="mt-1 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 text-mocha placeholder:text-mocha/30"
          />
        </div>

        <div>
          <p className="eyebrow text-[10px] mb-2">Bạn là khách của</p>
          <div className="flex gap-3">
            {[
              { v: 'groom', label: 'Nhà Trai' },
              { v: 'bride', label: 'Nhà Gái' },
            ].map((o) => (
              <label
                key={o.v}
                className={
                  'flex-1 cursor-pointer text-center text-sm py-3 rounded-lg border transition ' +
                  (side === o.v
                    ? 'border-gold bg-gold/10 text-mocha'
                    : 'border-gold/30 text-mocha/70 hover:border-gold/60')
                }
              >
                <input
                  type="radio"
                  name="side"
                  value={o.v}
                  checked={side === o.v}
                  onChange={() => setSide(o.v)}
                  className="sr-only"
                />
                {o.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-[10px] mb-2">Bạn sẽ tham dự?</p>
          <div className="flex gap-3">
            {[
              { v: 'yes', label: 'Có, em sẽ đến 🎉' },
              { v: 'no', label: 'Tiếc quá, em bận mất 💌' },
            ].map((o) => (
              <label
                key={o.v}
                className={
                  'flex-1 cursor-pointer text-center text-sm py-3 rounded-lg border transition ' +
                  (attending === o.v
                    ? 'border-gold bg-gold/10 text-mocha'
                    : 'border-gold/30 text-mocha/70 hover:border-gold/60')
                }
              >
                <input
                  type="radio"
                  name="attending"
                  value={o.v}
                  checked={attending === o.v}
                  onChange={() => setAttending(o.v)}
                  className="sr-only"
                />
                {o.label}
              </label>
            ))}
          </div>
        </div>

        {attending === 'yes' && (
          <div>
            <label className="eyebrow text-[10px]">Số người tham dự</label>
            <input
              type="number"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-1 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 text-mocha"
            />
          </div>
        )}

        <div>
          <label className="eyebrow text-[10px]">Lời chúc (tuỳ chọn)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Gửi đôi lời tới cô dâu chú rể..."
            className="mt-1 w-full bg-transparent border border-gold/30 focus:border-gold outline-none rounded-md p-3 text-mocha placeholder:text-mocha/30"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 rounded-lg bg-mocha text-cream tracking-[0.3em] uppercase text-xs font-medium hover:bg-gold transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Đang gửi...' : 'Gửi xác nhận'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-red-600 text-center">
            Có lỗi xảy ra. Vui lòng thử lại sau ít phút.
          </p>
        )}
      </form>
    </section>
  );
}
