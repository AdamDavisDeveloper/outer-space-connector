export function coordinatesToEncryptedString(latitude: number, longitude: number, key: number): string {
    // Convert coordinates to a binary string
    const toBinary = (num: number): string => 
        num.toString().replace('.', '').split('').map(n => n.charCodeAt(0).toString(2)).join(' ');

    let binaryLat = toBinary(latitude);
    let binaryLong = toBinary(longitude);

    // XOR encryption
    const xorEncrypt = (binaryStr: string): string => {
        return binaryStr.split(' ').map(num => 
            parseInt(num, 2) ^ key
        ).join(' ');
    };

    return xorEncrypt(binaryLat) + '-' + xorEncrypt(binaryLong);
}

export function encryptedStringToCoordinates(encryptedStr: string, key: number): {latitude: number, longitude: number} {
    const [encryptedLat, encryptedLong] = encryptedStr.split('-');

    // XOR decryption (same as encryption)
    const xorDecrypt = (encrypted: string): string => {
        return encrypted.split(' ').map(num => 
            String.fromCharCode(parseInt(num, 10) ^ key)
        ).join('');
    };

    const decryptedLat = xorDecrypt(encryptedLat);
    const decryptedLong = xorDecrypt(encryptedLong);

    // Convert back to float
    const toFloat = (str: string): number => parseFloat(str.slice(0, -2) + '.' + str.slice(-2));

    return { latitude: toFloat(decryptedLat), longitude: toFloat(decryptedLong) };
}