const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const toSGDate = (value: string | null | undefined): string => {
    if (!value) {
        return '';
    }
    try {
        var dt = new Date(Date.parse(value));
        var y = dt.getFullYear();
        var m = months[dt.getMonth()];
        var d = dt.getDate();
        return `${d}. ${m} ${y}`;
    }
    catch {
    }
    return '';
}