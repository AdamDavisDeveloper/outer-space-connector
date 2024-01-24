export function coordinatesToURLEncryptedString(latitude: string, longitude: string, key: number): string {
    // Convert coordinates to a binary string
    const toBinary = (num: string): string => 
        num.replace('.', '').split('').map(n => n.charCodeAt(0).toString(2)).join(' ');

    let binaryLat = toBinary(latitude);
    let binaryLong = toBinary(longitude);

    // XOR encryption
    const xorEncrypt = (binaryStr: string): string => {
        return binaryStr.split(' ').map(num => 
            String.fromCharCode(parseInt(num, 2) ^ key)
        ).join('');
    };

    let encryptedData = xorEncrypt(binaryLat) + '-' + xorEncrypt(binaryLong);

    // Convert to Base64 for URL safety
    let base64 = btoa(encryptedData);

    // Make URL-safe and remove '=' padding
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}




export function URLEncryptedStringToCoordinates(encryptedStr: string, key: number): {latitude: number, longitude: number} {
    // Replace URL-safe characters and add padding if necessary
    let base64 = encryptedStr.replace(/-/g, '+').replace(/_/g, '/');
    let paddingNeeded = (4 - base64.length % 4) % 4;
    base64 += "=".repeat(paddingNeeded);

    // Convert from Base64
    let decodedData = atob(base64);
    const [encryptedLat, encryptedLong] = decodedData.split('-');

    // XOR decryption (same as encryption)
    const xorDecrypt = (encrypted: string): string => {
        return encrypted.split('').map(char => 
            String.fromCharCode(char.charCodeAt(0) ^ key)
        ).join('');
    };

    const decryptedLat = xorDecrypt(encryptedLat);
    const decryptedLong = xorDecrypt(encryptedLong);

    // Convert back to float
    const toFloat = (str: string): number => parseFloat(str.slice(0, -2) + '.' + str.slice(-2));

    return { latitude: toFloat(decryptedLat), longitude: toFloat(decryptedLong) };
}
