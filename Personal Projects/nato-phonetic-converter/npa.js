function convert() {
    var input = document.getElementById("englishText").value;
    var natoText = document.getElementById("natoText");
    input = input.toLowerCase();
    var output = '';
    
    for (var i = 0; i < input.length; i++) {
        switch (input[i])
        {
            case 'a': output += 'Alpha '; break;
            case 'b': output += 'Bravo '; break;
            case 'c': output += 'Charlie '; break;
            case 'd': output += 'Delta '; break;
            case 'e': output += 'Echo '; break;
            case 'f': output += 'Foxtrot '; break;
            case 'g': output += 'Golf '; break;
            case 'h': output += 'Hotel '; break;
            case 'i': output += 'India '; break;
            case 'j': output += 'Juliet '; break;
            case 'k': output += 'Kilo '; break;
            case 'l': output += 'Lima '; break;
            case'm': output += 'Mike '; break;
            case 'n': output += 'November '; break;
            case 'o': output += 'Oscar '; break;
            case 'p': output += 'Papa '; break;
            case 'q': output += 'Quebec '; break;
            case 'r': output += 'Romeo '; break;
            case's': output += 'Sierra '; break;
            case 't': output += 'Tango '; break;
            case 'u': output += 'Uniform '; break;
            case 'v': output += 'Victor '; break;
            case 'w': output += 'Whiskey '; break;
            case 'x': output += 'X-ray '; break;
            case 'y': output += 'Yankee '; break;
            case 'z': output += 'Zulu '; break;
            default: output = output.substring(0, output.length -1) + input[i] + " "; break;
        }
    }
    natoText.value = output;
}
