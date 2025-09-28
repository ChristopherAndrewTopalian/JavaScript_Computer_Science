javascript:(
/* get_all_links_and_download.js */
function()
{
    function getAllLinksAndDownload()
    {
        /* collect all links */
        let links = document.querySelectorAll("a");

        let list = "";

        for (let i = 0; i < links.length; i++)
        {
            if (links[i].href)
            {
                list += links[i].href + "\n";
            }
        }

        /* make text file */
        let blob = new Blob([list], { type: "text/plain" });

        let url = URL.createObjectURL(blob);

        /* trigger download */
        let a = document.createElement("a");
        a.href = url;
        a.download = "links.txt";
        document.body.append(a);
        a.click();

        /* cleanup */
        document.body.remove(a);
        URL.revokeObjectURL(url);
    }

    getAllLinksAndDownload();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

