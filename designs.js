// Select inputs and variable declaration
let colorInput = $('#colorPicker');
let heightInput = $('#input_height');
let widthInput = $('#input_width');
let table = $('#pixel_canvas');

// Grid Creation
function makeGrid() {
    for(let i = 0; i < heightInput.val(); i++) {
        table.append('<tr id="row' + i +'"></tr>');
        for(let j = 0; j < widthInput.val(); j++) {
            $('#row' + i).append('<td></td>');
        }
    }
}