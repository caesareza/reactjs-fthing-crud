import maleAvatar from '../images/male.jpg';
import femaleAvatar from '../images/famale.jpg';

export const gender = g => {
    if(g === 0) return 'Female';
    return 'Male';
}

export const married = m => {
    if(m === 0) return 'Single';
    return 'Married';
}

export const genderAvatar = a => {
    if(a === 0) return femaleAvatar;
    return maleAvatar;
}