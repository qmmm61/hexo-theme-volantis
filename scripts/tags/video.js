'use strict';

function postVideo(args) {
  let src = args[0].trim()
  return `<video controls preload><source src='${src}' type='video/mp4'>Your browser does not support the video tag.</video>`;
}

function postVideos(args, content) {
  args = args.join(' ').split(',')
  var cls = args[0]
  if (cls.length > 0) {
    cls = ' ' + cls
  }
  var col = Number(args[1]) || 0;
  if (col > 0) {
    return `<div class="videos${cls}" col='${col}'>${content}</div>`
  } else {
    return `<div class="videos${cls}">${content}</div>`
  }
}

hexo.extend.tag.register('video', postVideo);
hexo.extend.tag.register('videos', postVideos, {ends: true});