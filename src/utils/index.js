export const getRedirectTo = (type, header) => {
    let path = '';
    if (type === 'Boss') {
        path = '/boss';
    } else {
        path = '/jobseeker'
    }
    if (!header) {
        path += 'info'
    }
    return path;
}