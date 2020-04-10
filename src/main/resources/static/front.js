var app = new function () {
    var url = "http://localhost:8080/api/user/all";
    Data = [];

    var updateindex = 0;
    this.FetchAll = function () {
      
        fetch(url)
        .then((response) => {
            Data = response.json();
            // console.log(playlists);
            return Data;

        }).then((Data) => {
            console.log(Data);
            var html = "<table border='1|1'>";
            html += "<th>ID</th>";
            html += "<th>Name</th>";
            html += "<th>EMAIL</th>";
            html += "<th>Actions</th>";
            for (var i = 0; i < Data.length; i++) {
                html += "<tr>";
                html += "<td>" + Data[i].userid + "</td>";
                html += "<td>" + Data[i].username + "</td>";
                html += "<td>" + Data[i].useremail + "</td>";
                html += '<td><button onclick="app.edit(' + Data[i].userid + ')">Edit</button></td>';
                html += '<td><button onclick="app.del(' + Data[i].userid + ')">Delete</button></td>';
                html += "</tr>";
            }
            html += "</table>";
            document.getElementById("box").innerHTML = html;
        });
    }

    // saveAndUpdate
    this.saveAndUpdate = function () {
        // alert();
        ((document.getElementById('myBtn').innerHTML == "Save") ? this.add() : this.update());
    }

    this.add = function () {
        var userid = 0;
        var username = document.getElementById("name").value;
        var useremail = document.getElementById("email").value;


        playlistobj = {};
        playlistobj.userid = userid;
        playlistobj.username = username;
        playlistobj.useremail = useremail;

        alert(JSON.stringify(playlistobj));

        var addurl= "http://localhost:8080/api/user/";

        fetch(addurl, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(playlistobj)
        })
            .then((response) => {

                this.FetchAll();
                document.getElementById('id').value = '';
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
            });
    }

    // Edit
    this.edit = function (userid) {
        alert(userid);
        document.getElementById('myBtn').innerHTML = "update";
       updateindex = userid;


     /*   var edurl= "http://localhost:8080/api/user";
            

        fetch(edurl + "/" + userid, { method: 'PUT' })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function (names) {
                //alert(JSON.stringify(names));
               updateindex = names.userid;
               // document.getElementById('id').value = names.userid;
                document.getElementById('name').value = names.username;
                document.getElementById('email').value = names.useremail;

            }) */
    
    }
    this.update = function () {
        alert(updateindex);
            var username1=document.getElementById("name").value;
            var usermailid1=document.getElementById("email").value;
        //console.log("username1username1" +username1);
        //console.log("usermailid1usermailid1" +usermailid1);
        
         
        
            var jsondata = JSON.stringify({
                username: username1,
                useremail:usermailid1,
               
            });
           
            alert(username1);
            alert(usermailid1);
            $.ajax({
                
                url: 'http://localhost:8080/api/user/'+updateindex,
                type: 'PUT',
                data: jsondata,
                contentType: "application/json; charset=utf-8",
            
            });
        
        
           // page refresh
           location.reload(true);
           
        }

    // delete
    this.del = function (deleteid) {
        alert(deleteid);
        
           var delurl= "http://localhost:8080/api/user/";
            
        fetch(delurl + "/" + deleteid, {
            method: 'delete',
            // mode: 'cors',
            // redirect: 'follow'
        }).then((response) => {

            this.FetchAll();
        });
    }
}

