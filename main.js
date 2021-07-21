var members = [
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
    "https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/03/400x400-stan-american-dad.png", 
    "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png", 
    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", 
    ];

    var names = [
    "My Family-Book", 
    "Bojurajalu Balasaravanan", 
    "Balasaravanan Dhanwin Basil", 
    "Balasaravanan Ashmitha", 
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }