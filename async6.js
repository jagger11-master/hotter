getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});


async function processData() {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    console.log(c);
}