export default class SocialButton {
    static KEY = 'Entity.Facade.SocialButton';

    tag: string = 'a';

    type: string = 'button';

    target: string = '_blank'

    style = {
        display: 'inline-block',
        padding: '.7rem',
        margin: '1rem',
        borderRadius: '100%',
        border: 0,
        background: 'white',
        color: 'white',
        textDecoration: 'none'
    }

    public constructor(
        public innerText: string,
        public onclick: Function,
        bgColor: string,
        public href: string = '#'
    ) {
        this.style.background = bgColor;
    }
}
