import React from 'react';
import { Button, Card } from '@idds/react';

const Aspirations = () => (
  <section className="asp" id="pengaduan">
    <div className="container">
      <p className="eyebrow">
        <span className="eyebrow__rule"></span>Suara anda berarti
      </p>
      <h2 className="h2 asp__title">Sampaikan aspirasi. Temukan dukungan.</h2>

      <div className="asp__grid">
        <Card className="acard acard--blue">
          <p className="acard__eyebrow">Pengaduan &amp; aspirasi masyarakat</p>
          <h3 className="acard__title">LAPOR PAK YES!</h3>
          <p className="acard__desc">
            Sampaikan pengaduan atau aspirasi terkait layanan Kabupaten Lamongan melalui kanal WhatsApp yang tercantum di portal.
          </p>

          <div className="acard__contact">
            <div>
              <p className="acard__label">WhatsApp LAPOR PAK YES!</p>
              <p className="acard__phone">0811-3021-708</p>
            </div>
            <Button hierarchy="primary" size="md">
              Buka WhatsApp
            </Button>
          </div>

          <div className="acard__links">
            <a href="#">SP4N-LAPOR!</a>
            <a href="#">LAPOR WBS</a>
          </div>
        </Card>

        <Card className="acard acard--sage">
          <p className="acard__eyebrow acard__eyebrow--sage">Perlindungan perempuan &amp; anak</p>
          <h3 className="acard__title acard__title--dark">SPIKER PERAK</h3>
          <p className="acard__desc acard__desc--dark">
            Sistem Pengaduan Online Kekerasan terhadap Perempuan dan Anak. Akses kanal khusus untuk menyampaikan pengaduan.
          </p>
          <a href="#" className="acard__wa">WhatsApp 0812-7677-0778</a>
          <a href="#" className="acard__link">Akses SPIKER PERAK</a>
          <p className="acard__fine">Sampaikan informasi seperlunya dan ikuti petunjuk pada kanal resmi.</p>
        </Card>
      </div>
    </div>
  </section>
);

export default Aspirations;
