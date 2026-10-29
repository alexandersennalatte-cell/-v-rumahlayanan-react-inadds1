const stages = [
  {
    id: 'stage-kelahiran',
    num: '01',
    title: 'Kelahiran',
    desc: 'Menyambut awal kehidupan.',
    cards: [
      { title: 'BABLAS', desc: 'Bayi Lahir Berkas Langsung Tuntas.', org: 'RSUD Ngimbang' },
      { title: 'JAMILA', desc: 'Penjaringan Ibu Hamil Aktif Berkala.', org: 'Puskesmas Kembangbahu' },
      { title: 'PAUD HI', desc: 'Pendidikan Anak Usia Dini Holistik Integratif.', org: 'Dinas Pendidikan' },
    ],
  },
  {
    id: 'stage-pendidikan',
    num: '02',
    title: 'Anak & Pendidikan',
    desc: 'Membuka ruang untuk tumbuh dan belajar.',
    cards: [
      { title: 'Layanan Pendidikan', desc: 'Pinta informasi layanan pendidikan.', org: 'LANDIK · Dinas Pendidikan' },
      { title: 'JEMBATAN EMAS', desc: 'Transisi anak PAUD menuju sekolah dasar.', org: 'Dinas Pendidikan' },
      { title: 'AKSI BIRU', desc: 'ATS Kembali Sekolah Melalui Bakti Insan Guru.', org: 'Dinas Pendidikan' },
    ],
  },
  {
    id: 'stage-bekerja',
    num: '03',
    title: 'Bekerja & Berusaha',
    desc: 'Menata pekerjaan, mengembangkan usaha.',
    cards: [
      { title: 'Layanan Ketenagakerjaan', desc: 'Akses layanan melalui aplikasi Workdin.', org: 'Ketenagakerjaan · Workdin' },
      { title: 'Perizinan', desc: 'Informasi perizinan melalui perangkat daerah.', org: 'DPMPTSP Lamongan' },
      { title: 'Layanan Industri', desc: 'Sistem informasi layanan industri.', org: 'SILLA Lamongan' },
    ],
  },
  {
    id: 'stage-pernikahan',
    num: '04',
    title: 'Pernikahan & Keluarga',
    desc: 'Membangun keluarga, saling melindungi.',
    cards: [
      { title: 'MANTANKU', desc: 'Manten Anyar Untuk Telu Dokumen Administrasi Kependudukan.', org: 'Disdukcapil Lamongan' },
      { title: 'INKOMMPak_GA', desc: 'Informasi dan Komunikasi Pencegahan Perkawinan Anak dan PUSPA.', org: 'DINPPPA Lamongan' },
      { title: 'SPIKER PERAK', desc: 'Pengaduan kekerasan terhadap perempuan dan anak.', org: 'Perlindungan perempuan & anak' },
    ],
  },
  {
    id: 'stage-lansia',
    num: '05',
    title: 'Lansia',
    desc: 'Menjaga kesehatan dan kesejahteraan.',
    cards: [
      { title: 'PANDAWA LANSIA', desc: 'Pelayanan Terpadu dan Pengawalan Kesejahteraan Lansia.', org: 'Puskesmas Sukorame' },
      { title: 'SEHATI LANSIA', desc: 'Kesehatan melalui Posbindu Lansia.', org: 'Puskesmas Moropeleng' },
      { title: 'PODO SIMPATI', desc: 'Puskesmas Modo Siap Jemput Pasien Lansia dan Balita.', org: 'Puskesmas Modo' },
    ],
  },
  {
    id: 'stage-akhir',
    num: '06',
    title: 'Akhir Hayat',
    desc: 'Pendampingan administrasi di masa kehilangan.',
    cards: [
      { title: 'Pelayanan Akta Kematian', desc: 'Informasi layanan dan FAQ administrasi kematian.', org: 'Disdukcapil Lamongan' },
      { title: 'KAMAR 2.1', desc: 'Kartu Makam Tlogolanyar 2×1.', org: 'Lokak · Kelurahan Tlogolanyar' },
    ],
    note: 'KAMAR 2.1 merupakan layanan lokal Kelurahan Tlogolanyar, bukan layanan pemakaman seluruh kabupaten.',
  },
];

export default stages;
