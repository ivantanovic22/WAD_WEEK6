exports.landing_page = function(req, res) {
    res.render("entries", {
        'title': 'Guest Book',
        'subject': 'Good day out',
        'contents': 'We had a really good time visiting the museum.'
        });
}

exports.entries_list = function(req, res) { 
   res.send('<h1>Guestbook Messages</h1><p>Not yet implemented:will show a list of guest book entries.</p>'); 
} 

exports.new_entry = function(req, res) {     
    res.send('<h1>Not yet implemented: show a new entry page.</h1>'); 
}

exports.about_page= function(req, res) { 
    res.status(200);  
    res.redirect('/about.html');
}

exports.notFound= function(req, res) { 
    res.status(404); 
    res.type('text/plain');
    res.send('404 Not found.');
}

exports.serverError= function(err, req, res, next) {
    res.status(500);
    res.type('text/plain'); 
    res.send('Internal Server Error.'); 
}
    