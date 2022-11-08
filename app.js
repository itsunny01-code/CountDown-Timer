const EndDate = " 19 November 2033  02:10 PM"
const inputs = document.querySelectorAll("input")


function count () {
    const end = new Date(EndDate)
    const now = new Date()
    const Diff = (end - now) / 1000 ;

    if(Diff < 0) return ;


  inputs[0].value = Math.floor(Diff / 3600 / 24 );
  inputs[1].value = Math.floor(Diff / 3600 ) % 24 ;
  inputs[2].value = Math.floor(Diff / 60 ) % 60 ;
  inputs[3].value = Math.floor(Diff) % 60 ;

}

count();

setInterval(
    () => {
        count()
    },
    1000
)

// Over view > 1 Day = 24 HRS > 1 HRS = 60 MIN  > 60 MIN = 3600 SEC 