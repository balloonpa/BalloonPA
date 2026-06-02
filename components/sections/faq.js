import Container from '@/components/Container';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const FAQ_ITEMS = [
  {
    q: 'ราคาลูกโป่งเริ่มต้นที่เท่าไหร่?',
    a: 'ราคาขึ้นอยู่กับประเภทและขนาดของงาน สามารถดูราคาคร่าวๆ ได้ในหน้าสินค้าของเรา หรือสอบถามราคาแพ็กเกจเฉพาะงานได้ฟรีผ่าน LINE @balloonpa.th ตลอด 24 ชั่วโมง ไม่มีค่าใช้จ่ายในการปรึกษา',
  },
  {
    q: 'ต้องสั่งล่วงหน้ากี่วัน?',
    a: 'แนะนำสั่งล่วงหน้าอย่างน้อย 1–2 วันทำการ สำหรับงานใหญ่หรืองานที่ต้องออกแบบพิเศษ ควรสั่งล่วงหน้า 3–7 วัน รับงานด่วนได้ตามความพร้อม กรุณาสอบถามก่อนสั่งเสมอ',
  },
  {
    q: 'จัดส่งพื้นที่ไหนบ้าง?',
    a: 'บริการจัดส่งและติดตั้งครอบคลุมทั่วกรุงเทพมหานครและปริมณฑล ไม่ว่าจะเป็นย่านลาดพร้าว รัชดาภิเษก พระราม 9 อโศก สุขุมวิท ดอนเมือง จตุจักร บางนา บางเขน และวังทองหลาง สอบถามค่าจัดส่งสำหรับพื้นที่ของคุณได้ผ่าน LINE',
  },
  {
    q: 'รับออกแบบตามธีมและสีที่ต้องการได้ไหม?',
    a: 'รับออกแบบและจัดตกแต่งตามธีมและสีที่ต้องการทุกประเภท ไม่ว่าจะเป็นธีมเจ้าหญิง สีพาสเทล Rustic Luxury หรือธีมอื่นๆ สามารถส่งรูปอ้างอิงมาได้ผ่าน LINE แล้วเราจะออกแบบให้ตรงใจ',
  },
  {
    q: 'มีบริการจัดส่งพร้อมติดตั้งหน้างานด้วยไหม?',
    a: 'มีบริการจัดส่งพร้อมติดตั้งหน้างาน ให้งานออกมาสวยงามตรงตามที่ต้องการ ราคาค่าจัดส่งและติดตั้งขึ้นอยู่กับพื้นที่และความซับซ้อนของงาน สามารถสอบถามและนัดเวลาได้ผ่าน LINE',
  },
  {
    q: 'ชำระเงินด้วยวิธีใดได้บ้าง?',
    a: 'รับชำระผ่านการโอนเงินธนาคาร PromptPay และ TrueMoney Wallet โดยจะแจ้งรายละเอียดบัญชีหลังจากยืนยันออเดอร์ผ่าน LINE',
  },
];

export function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-black">คำถามที่พบบ่อย</h2>
          <p className="mt-2 text-gray-500">มีข้อสงสัยเพิ่มเติม? ถามผ่าน LINE ได้เลย</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-semibold text-gray-900"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span
                    className="text-xl flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: BRAND.colors.pink,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { FAQ_ITEMS };
