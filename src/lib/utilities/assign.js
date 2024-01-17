export default function assign(value, fallback){
    return (value === undefined)? fallback : value;
}
