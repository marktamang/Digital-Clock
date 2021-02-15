var data = []
function addData(){
    var items = document.getElementById('item').nodeValue;
    data.push(items);
    document.getElementById('item').nodeValue = '';
    if(data.length > 3)
    {
        for(var a = 0; a < data.length; a++){
            document.getElementsByClassName('list')[0].append.data[a];
        }
    }
}