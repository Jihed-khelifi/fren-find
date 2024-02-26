class SoundService {

    private sound: HTMLAudioElement;
    private soundUrl: string;

    constructor(soundUrl: string) {
        this.soundUrl = soundUrl;
        this.sound = new Audio(this.soundUrl);
    }
    
    public playSound() {
        this.sound.play();
    }

    public pauseSound() {
        this.sound.pause();
    }

    public stopSound() {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}