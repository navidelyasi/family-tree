//JavaScript
var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    siblingSeparation: 120,
    template: 'john',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    }
});


chart.load([
    { id: 1, pids: [2], name: "رضا", img: "images/man.jpeg", gender: 'male' },
    { id: 2, pids: [1], name: "سارا", title: "", img: "images/woman.jpeg", gender: 'female' },

    { id: 3, pids: [4], mid: 2, fid: 1, name: "مریم", img: "images/woman.jpeg", gender: 'female' },
    { id: 4, pids: [3], name: "خسرو", title: "", img: "images/man.jpeg", gender: 'male' },

    { id: 5, mid: 2, fid: 1, name: "امیر", img: "images/man.jpeg", gender: 'male' },

    { id: 6, mid: 3, fid: 4, pids: [7,8], name: "احسان", title: "", img: "images/man.jpeg", gender: 'male' },
    { id: 7, pids: [6], name: "نرگس", title: "", img: "images/woman.jpeg", gender: 'female' },
    { id: 8, pids: [6], name: "نازنین", title: "", img: "images/woman.jpeg", gender: 'female' },

    { id: 9,  mid: 3, fid: 4, name: "درنا", title: "", img: "images/woman.jpeg", gender: 'female' },
    { id: 10,  mid: 3, fid: 4, name: "نوید", title: "", img: "images/man.jpeg", gender: 'male' },
    { id: 11,  mid: 3, fid: 4, name: "مهرزاد", title: "", img: "images/man.jpeg", gender: 'male' },

    { id: 12, fid: 6, mid: 7, pids: [14], name: "فرید", title: "", img: "images/man.jpeg", gender: 'male' },
    { id: 13, fid: 6, mid: 7, pids: [15], name: "کامران", img: "images/man.jpeg", gender: 'male' },
    { id: 14, pids: [12], name: "مینا", title: "", img: "images/woman.jpeg", gender: 'female' },
    { id: 15, pids: [13], name: "سیمین", img: "images/woman.jpeg", gender: 'female' },
    { id: 16, fid: 12, mid: 14, name: "امیر", img: "images/man.jpeg", gender: 'male' },
    { id: 17, fid: 12, mid: 14, name: "نیکا", img: "images/woman.jpeg", gender: 'female' },
    { id: 18, fid: 12, mid: 14, name: "امین", img: "images/man.jpeg", gender: 'male' }
]);