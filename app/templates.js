exports["code"] = "<div class=\"first-line line\"><span>{first-line-num}.</span>{first-line-source}</div>\n<div class=\"second-line failing-line line\"><span>{second-line-num}.</span>{second-line-source}</div>\n<div class=\"third-line line\"><span>{third-line-num}.</span>{third-line-source}</div>\n"
exports["custom-frame"] = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n    <title>hello</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n    <h2>This is a custom frame.</h2>\n  </body>\n</html>\n"
exports["diff"] = "<div class=\"expected\">\n  <strong>Expected:</strong>{0}\n</div>\n<div class=\"actual\">\n  <strong>Actual:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{1}\n</div>\n"
exports["error"] = "<li id=\"error-{id}\">\n  {title}\n  <h4>{name}</h4>\n  <div class=\"diff{diff-class}\">{diff}</div>\n  <div class=\"code\">{code}</div>\n  <div class=\"stack\">\n    {stack}\n  </div>\n</li>\n"
exports["frame"] = "<iframe class=\"frame\" src=\"{url}#{options}\"></iframe>\n"
exports["layout"] = "<div class=\"top\">\n  <div class=\"results\">\n    <a class=\"frame-button center pointer\">\n      <span class=\"open pointer\">❮</span>\n      <span class=\"close pointer\">❯</span>\n    </a>\n    <ul class=\"errors\"></ul>\n    <div class=\"pass\"></div>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n\n<div class=\"navigation\">\n  <div class=\"buttons\">\n    <a class=\"run-again pointer\">Run Again</a>\n    <a class=\"conn\" class=\"pointer\">{conn}</a>\n    <a class=\"maximize pointer\">Maximize Frame</a>\n    <a class=\"minimize pointer\">Minimize Frame</a>\n  </div>\n</div>\n\n<div class=\"overview\">\n  <ul class=\"list\"></ul>\n</div>\n\n<div class=\"grep\">\n  <div class=\"form\">\n    <label><span>Grep</span> &#x2192;</label>\n    <input id=\"grep\" type=\"text\" placeholder=\"Type any test name filter...\" value=\"{grep}\" />\n  </div>\n</div>\n"
exports["overview"] = "<ul class=\"list\"></ul>\n"
exports["pass"] = "<div class=\"pass center\">\n  <h1>{0} Passed Assertions.</h1>\n</div>\n"
exports["stack-line"] = "</div><div class=\"stack-line\">\n"
exports["stack"] = "<div class=\"stack-title\">{0}</div>\n"
exports["test"] = "<li class=\"test\">\n  <span>{icon}</span>\n  {name}\n</li>\n"
exports["waiting"] = "<div class=\"waiting center {message}\">\n  <h1 class=\"status\">{message}</h1>\n</div>\n"