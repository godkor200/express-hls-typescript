import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg('src/videos/신서유기 8.E07.201120.720p-NEXT.mp4', { timeout: 432000 })
  .addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls',
  ])
  .output('src/videos/output.m3u8')
  .on('end', () => {
    console.log('end');
  })
  .run();
