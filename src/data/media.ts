export interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  webmSrc?: string;
  poster?: string;
  alt: string;
  category: string;
  tags: string[];
  serviceSlug?: string;
}

// 38 Video
const videos: MediaItem[] = [
  { id: 'v01', type: 'video', src: '/media/videos/v01.mp4', poster: '/media/thumbs/v01-thumb.jpg', alt: 'Biyokütle operasyon görüntüsü', category: 'Operasyon', tags: ['operasyon', 'tesis'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v02', type: 'video', src: '/media/videos/v02.mp4', poster: '/media/thumbs/v02-thumb.jpg', alt: 'Odun kırma makinesi çalışması', category: 'Operasyon', tags: ['makine', 'odun'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v03', type: 'video', src: '/media/videos/v03.mp4', poster: '/media/thumbs/v03-thumb.jpg', alt: 'Ağaç kesim operasyonu', category: 'Operasyon', tags: ['kesim', 'orman'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v04', type: 'video', src: '/media/videos/v04.mp4', poster: '/media/thumbs/v04-thumb.jpg', alt: 'Biyokütle yükleme ve taşıma', category: 'Lojistik', tags: ['yükleme', 'kamyon', 'taşıma'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v05', type: 'video', src: '/media/videos/v05.mp4', poster: '/media/thumbs/v05-thumb.jpg', alt: 'Stoklama alanı görüntüsü', category: 'Tesis', tags: ['stok', 'depo'], serviceSlug: 'stoklama-kurutma' },
  { id: 'v06', type: 'video', src: '/media/videos/v06.mp4', poster: '/media/thumbs/v06-thumb.jpg', alt: 'Yonga üretim süreci', category: 'Operasyon', tags: ['yonga', 'üretim'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v07', type: 'video', src: '/media/videos/v07.mp4', poster: '/media/thumbs/v07-thumb.jpg', alt: 'Tarla temizlik çalışması', category: 'Saha', tags: ['tarla', 'temizlik'], serviceSlug: 'tarimsal-atik-toplama' },
  { id: 'v08', type: 'video', src: '/media/videos/v08.mp4', poster: '/media/thumbs/v08-thumb.jpg', alt: 'Mısır sapı toplama', category: 'Saha', tags: ['mısır', 'toplama'], serviceSlug: 'tarimsal-atik-toplama' },
  { id: 'v09', type: 'video', src: '/media/videos/v09.mp4', poster: '/media/thumbs/v09-thumb.jpg', alt: 'Biyokütle depolama tesisi', category: 'Tesis', tags: ['depo', 'tesis'], serviceSlug: 'stoklama-kurutma' },
  { id: 'v10', type: 'video', src: '/media/videos/v10.mp4', poster: '/media/thumbs/v10-thumb.jpg', alt: 'Ağaç dalları kırma işlemi', category: 'Operasyon', tags: ['dal', 'kırma'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v11', type: 'video', src: '/media/videos/v11.mp4', poster: '/media/thumbs/v11-thumb.jpg', alt: 'Orman sahası çalışması', category: 'Saha', tags: ['orman', 'saha'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v12', type: 'video', src: '/media/videos/v12.mp4', poster: '/media/thumbs/v12-thumb.jpg', alt: 'Yükleme operasyonu detay', category: 'Lojistik', tags: ['yükleme', 'detay'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v13', type: 'video', src: '/media/videos/v13.mp4', poster: '/media/thumbs/v13-thumb.jpg', alt: 'Endüstriyel odun işleme', category: 'Operasyon', tags: ['endüstriyel', 'işleme'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v14', type: 'video', src: '/media/videos/v14.mp4', poster: '/media/thumbs/v14-thumb.jpg', alt: 'Biyokütle taşıma aracı', category: 'Lojistik', tags: ['araç', 'taşıma'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v15', type: 'video', src: '/media/videos/v15.mp4', poster: '/media/thumbs/v15-thumb.jpg', alt: 'Yonga kalite kontrol', category: 'Ürün', tags: ['kalite', 'yonga'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v16', type: 'video', src: '/media/videos/v16.mp4', poster: '/media/thumbs/v16-thumb.jpg', alt: 'Geniş saha operasyonu', category: 'Saha', tags: ['saha', 'geniş'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v17', type: 'video', src: '/media/videos/v17.mp4', poster: '/media/thumbs/v17-thumb.jpg', alt: 'Biyokütle stok alanı', category: 'Tesis', tags: ['stok', 'alan'], serviceSlug: 'stoklama-kurutma' },
  { id: 'v18', type: 'video', src: '/media/videos/v18.mp4', poster: '/media/thumbs/v18-thumb.jpg', alt: 'Ormancılık faaliyeti', category: 'Saha', tags: ['ormancılık', 'faaliyet'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v19', type: 'video', src: '/media/videos/v19.mp4', poster: '/media/thumbs/v19-thumb.jpg', alt: 'Ağır yük taşıma görüntüsü', category: 'Lojistik', tags: ['ağır yük', 'kamyon'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v20', type: 'video', src: '/media/videos/v20.mp4', poster: '/media/thumbs/v20-thumb.jpg', alt: 'Tarımsal biyokütle sahası', category: 'Saha', tags: ['tarımsal', 'biyokütle'], serviceSlug: 'tarimsal-atik-toplama' },
  { id: 'v21', type: 'video', src: '/media/videos/v21.mp4', poster: '/media/thumbs/v21-thumb.jpg', alt: 'Biyokütle öğütme işlemi', category: 'Operasyon', tags: ['öğütme', 'işlem'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v22', type: 'video', src: '/media/videos/v22.mp4', poster: '/media/thumbs/v22-thumb.jpg', alt: 'Kısa operasyon klibi', category: 'Operasyon', tags: ['klip', 'kısa'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v23', type: 'video', src: '/media/videos/v23.mp4', poster: '/media/thumbs/v23-thumb.jpg', alt: 'Kapsamlı saha görüntüsü', category: 'Saha', tags: ['kapsamlı', 'drone'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v24', type: 'video', src: '/media/videos/v24.mp4', poster: '/media/thumbs/v24-thumb.jpg', alt: 'Budama sonrası temizlik', category: 'Operasyon', tags: ['budama', 'temizlik'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v25', type: 'video', src: '/media/videos/v25.mp4', poster: '/media/thumbs/v25-thumb.jpg', alt: 'Biyokütle nakliye süreci', category: 'Lojistik', tags: ['nakliye', 'süreç'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v26', type: 'video', src: '/media/videos/v26.mp4', poster: '/media/thumbs/v26-thumb.jpg', alt: 'Büyük ölçekli üretim hattı', category: 'Tesis', tags: ['üretim', 'büyük'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v27', type: 'video', src: '/media/videos/v27.mp4', poster: '/media/thumbs/v27-thumb.jpg', alt: 'Enerji hammaddesi hazırlık', category: 'Operasyon', tags: ['enerji', 'hammadde'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v28', type: 'video', src: '/media/videos/v28.mp4', poster: '/media/thumbs/v28-thumb.jpg', alt: 'Makine bakım ve operasyon', category: 'Operasyon', tags: ['bakım', 'makine'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v29', type: 'video', src: '/media/videos/v29.mp4', poster: '/media/thumbs/v29-thumb.jpg', alt: 'Orman yolu çalışması', category: 'Saha', tags: ['orman', 'yol'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v30', type: 'video', src: '/media/videos/v30.mp4', poster: '/media/thumbs/v30-thumb.jpg', alt: 'Hafif operasyon klibi', category: 'Operasyon', tags: ['klip', 'hafif'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v31', type: 'video', src: '/media/videos/v31.mp4', poster: '/media/thumbs/v31-thumb.jpg', alt: 'Tesis detay görüntüsü', category: 'Tesis', tags: ['tesis', 'detay'], serviceSlug: 'stoklama-kurutma' },
  { id: 'v32', type: 'video', src: '/media/videos/v32.mp4', poster: '/media/thumbs/v32-thumb.jpg', alt: 'Endüstriyel kırma makinesi', category: 'Operasyon', tags: ['kırma', 'endüstriyel'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v33', type: 'video', src: '/media/videos/v33.mp4', poster: '/media/thumbs/v33-thumb.jpg', alt: 'Kısa makine çalışma klibi', category: 'Operasyon', tags: ['kısa', 'makine'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v34', type: 'video', src: '/media/videos/v34.mp4', poster: '/media/thumbs/v34-thumb.jpg', alt: 'Büyük ölçekli lojistik', category: 'Lojistik', tags: ['büyük', 'lojistik'], serviceSlug: 'biyokutle-toplama-tasima' },
  { id: 'v35', type: 'video', src: '/media/videos/v35.mp4', poster: '/media/thumbs/v35-thumb.jpg', alt: 'Hızlı operasyon klibi', category: 'Operasyon', tags: ['hızlı', 'operasyon'], serviceSlug: 'odun-kirma-isleme' },
  { id: 'v36', type: 'video', src: '/media/videos/v36.mp4', poster: '/media/thumbs/v36-thumb.jpg', alt: 'Kapsamlı tesis turu', category: 'Tesis', tags: ['tur', 'kapsamlı'], serviceSlug: 'stoklama-kurutma' },
  { id: 'v37', type: 'video', src: '/media/videos/v37.mp4', poster: '/media/thumbs/v37-thumb.jpg', alt: 'Alan temizliği süreci', category: 'Saha', tags: ['alan', 'temizlik'], serviceSlug: 'agac-kesim-budama' },
  { id: 'v38', type: 'video', src: '/media/videos/v38.mp4', poster: '/media/thumbs/v38-thumb.jpg', alt: 'Biyokütle üretim hattı', category: 'Operasyon', tags: ['üretim', 'hat'], serviceSlug: 'odun-kirma-isleme' },
];

// 12 Görsel
const images: MediaItem[] = [
  { id: 'img01', type: 'image', src: '/media/images/img01.webp', poster: '/media/thumbs/img01-thumb.webp', alt: 'Biyokütle tesisi görünümü', category: 'Tesis', tags: ['tesis', 'genel'] },
  { id: 'img02', type: 'image', src: '/media/images/img02.webp', poster: '/media/thumbs/img02-thumb.webp', alt: 'Odun yonga stok alanı', category: 'Ürün', tags: ['yonga', 'stok'] },
  { id: 'img03', type: 'image', src: '/media/images/img03.webp', poster: '/media/thumbs/img03-thumb.webp', alt: 'Orman sahası panoramik', category: 'Doğa', tags: ['orman', 'doğa'] },
  { id: 'img04', type: 'image', src: '/media/images/img04.webp', poster: '/media/thumbs/img04-thumb.webp', alt: 'Biyokütle toplama ekibi', category: 'Operasyon', tags: ['ekip', 'toplama'] },
  { id: 'img05', type: 'image', src: '/media/images/img05.webp', poster: '/media/thumbs/img05-thumb.webp', alt: 'Endüstriyel kırma tesisi', category: 'Tesis', tags: ['endüstriyel', 'kırma'] },
  { id: 'img06', type: 'image', src: '/media/images/img06.webp', poster: '/media/thumbs/img06-thumb.webp', alt: 'Tarımsal biyokütle alanı', category: 'Saha', tags: ['tarımsal', 'alan'] },
  { id: 'img07', type: 'image', src: '/media/images/img07.webp', poster: '/media/thumbs/img07-thumb.webp', alt: 'Yükleme operasyonu', category: 'Lojistik', tags: ['yükleme', 'kamyon'] },
  { id: 'img08', type: 'image', src: '/media/images/img08.webp', poster: '/media/thumbs/img08-thumb.webp', alt: 'Ürün kalite görüntüsü', category: 'Ürün', tags: ['kalite', 'ürün'] },
  { id: 'img09', type: 'image', src: '/media/images/img09.webp', poster: '/media/thumbs/img09-thumb.webp', alt: 'Saha çalışması detay', category: 'Saha', tags: ['saha', 'çalışma'] },
  { id: 'img10', type: 'image', src: '/media/images/img10.webp', poster: '/media/thumbs/img10-thumb.webp', alt: 'Biyokütle enerji tesisi', category: 'Tesis', tags: ['enerji', 'tesis'] },
  { id: 'img11', type: 'image', src: '/media/images/img11.webp', poster: '/media/thumbs/img11-thumb.webp', alt: 'Sürdürülebilir ormancılık', category: 'Doğa', tags: ['sürdürülebilir', 'orman'] },
  { id: 'img12', type: 'image', src: '/media/images/img12.webp', poster: '/media/thumbs/img12-thumb.webp', alt: 'Sirver operasyon genel', category: 'Operasyon', tags: ['genel', 'operasyon'] },
];

export const allMedia: MediaItem[] = [...videos, ...images];

export const mediaCategories = ['Tümü', 'Operasyon', 'Lojistik', 'Tesis', 'Saha', 'Ürün', 'Doğa'];

export function getMediaByCategory(category: string): MediaItem[] {
  if (category === 'Tümü') return allMedia;
  return allMedia.filter(m => m.category === category);
}

export function getMediaByService(serviceSlug: string): MediaItem[] {
  return allMedia.filter(m => m.serviceSlug === serviceSlug);
}

export function getVideosByCategory(category: string): MediaItem[] {
  if (category === 'Tümü') return videos;
  return videos.filter(m => m.category === category);
}

export function getFeaturedVideos(count = 8): MediaItem[] {
  // Return a diverse selection of larger, more impressive videos
  const featured = ['v04', 'v23', 'v26', 'v27', 'v34', 'v36', 'v19', 'v12', 'v11', 'v16', 'v32', 'v03'];
  return featured.slice(0, count).map(id => videos.find(v => v.id === id)!).filter(Boolean);
}

export function getImages(): MediaItem[] {
  return images;
}

export function getHeroVideos(): string[] {
  // Large, impressive videos for hero carousel
  return ['/media/videos/v04.mp4', '/media/videos/v23.mp4', '/media/videos/v26.mp4', '/media/videos/v27.mp4', '/media/videos/v34.mp4'];
}

export { videos, images };
