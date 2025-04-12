    // 使用 Howler.js 创建一个 Howl 对象
    const sound = new Howl({
        src: ['https://github.com/lingqiu1700/isui/raw/refs/heads/master/src/pages/sounds/t3.ogg'], // 音频文件路径
        html5: true // 确保使用 HTML5 Audio
    });

    // 获取播放和暂停按钮
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    // 为播放按钮添加点击事件
    playButton.addEventListener('click', () => {
        sound.play();
    });

    // 为暂停按钮添加点击事件
    pauseButton.addEventListener('click', () => {
        sound.pause();
    });
