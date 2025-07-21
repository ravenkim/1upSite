import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from 'src/shared/lib/shadcn/components/ui/card.tsx';

interface SongListFromHtmlProps {
  html: string;
}

// HTML 문자열을 DOM으로 파싱해서 곡 정보를 추출하는 함수
function parseSongsFromHtml(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const items = Array.from(doc.querySelectorAll('li.no_video'));
  return items.map((item) => {
    const img = item.querySelector('img');
    const titleA = item.querySelector('a.video_title');
    const album = item.querySelector('dt:contains(앨범)')?.nextElementSibling?.textContent || '';
    const release = item.querySelector('dt:contains(발매일)')?.nextElementSibling?.textContent || '';
    return {
      image: img?.getAttribute('src') || '',
      title: titleA?.textContent?.trim() || '',
      album: album.trim(),
      release: release.trim(),
    };
  });
}

const SongListFromHtml: React.FC<SongListFromHtmlProps> = ({ html }) => {
  let songs: { image: string; title: string; album: string; release: string }[] = [];
  try {
    songs = parseSongsFromHtml(html);
  } catch (e) {
    // 파싱 에러 시 빈 배열 반환
    songs = [];
  }

  if (!songs.length) return <div>곡 정보를 불러올 수 없습니다.</div>;

  return (
    <div className="flex flex-wrap gap-6">
      {songs.map((song, idx) => (
        <Card key={idx} className="w-56 flex flex-col items-center p-0">
          <CardHeader className="flex flex-col items-center gap-2 border-b-0 pb-0">
            <img
              src={song.image}
              alt={song.title + ' 이미지'}
              className="w-20 h-20 rounded-lg object-cover mb-2"
            />
            <CardTitle className="text-base text-center">{song.title}</CardTitle>
            <CardDescription className="text-center">앨범: {song.album}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center pt-0">
            <span className="text-xs text-muted-foreground">발매일: {song.release}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SongListFromHtml; 