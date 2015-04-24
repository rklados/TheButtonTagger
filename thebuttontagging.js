var index;
var doNext = function() {
    var entry = $(entries.get(index));
    entry[0].scrollIntoView();
    index++;
    var title = $(entry.find('.flair')).text();
    if (title) {
        var tag = $(entry.find('.userTagLink'));
        
	setTimeout(function() {
	var digits = title.substring(0, title.length - 1);
	var color = 'white';	
	var status = digits + 's';
	if (!isNaN(digits))
	{
		
		if (digits <= 60)
		{
			color = 'purple';
		}
		if (digits <= 51)
		{
			color = 'blue';
		}
		if (digits <= 41)
		{
			color = 'green';
		}
		if (digits <= 31)
		{
			color = 'yellow';
		}
		if (digits <= 21)
		{
			color = 'orange';
		}
		if (digits <= 11)
		{
			color = 'red';
		}
	} else if (title == 'non presser')
	{
		status = title;
		color = 'gray';
	}
        tag[0].click();
        setTimeout(function() {
            $('#userTaggerTag').val(status);
	    $('#userTaggerColor').val(color);
            $('#userTaggerSave').click();
            setTimeout(function() {
                doNext();
            }, 1)
        }, 1)
	}, 1);
    } else {
        doNext();
    }
};
var start = function() {
    entries = $('.sitetable.nestedlisting .entry');
    index = 0;
    doNext();
}
start();
