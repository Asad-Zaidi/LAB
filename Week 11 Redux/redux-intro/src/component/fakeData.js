import chance from 'chance';

export const fakeData = ()=> {
    const ch=chance();
    // return ch.name();
    // return ch.name({ middle: true });
    // return ch.name({ middle_initial: true });
    return ch.name({ prefix: true });
    // return ch.name({ nationality: 'en' });
}