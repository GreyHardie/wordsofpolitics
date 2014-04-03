country = "uk";
party = "";
g_word = 'europe';
countries = {}
static_nodes_s1 = [];
static_nodes_s2 = [];
static_nodes_s3 = [];
selected_party = 0;

selected_div = "#state_three_one"

$("#state_three_one").click(function() {
    selected_div = "#state_three_one";
    // $("#state_three_one > svg").css("background-color", "#eee").show(500);
    //  $("#state_three_two > svg").css("background-color", "black").show(500);
    $("#selection").css("text-align", "left").show(500);
});

$("#state_three_two").click(function() {
    selected_div = "#state_three_two";
    // $("#state_three_two > svg").css("background-color", "#eee").show(500);
    //  $("#state_three_one > svg").css("background-color", "black").show(500);
    $("#selection").css("text-align", "right").show(500);
});


countries_web = {
    "France": "fr",
    "Italy": "it",
    "The Netherlands": "nl",
    "United Kingdom": "uk"
};

$(".party").click(function() {
    country = countries_web[$(this).parent().parent().prev().text()];
    // console.log($(this).parent().parent().prev().text());
    // console.log(country);
    show_state("two", country, "");
    selected_party = $(this).text().toLowerCase().replace(/\s+/g, '');
    // console.log(selected_party);
    $('body').scrollTo('#state_two', {
        'duration': 2000
    });


});

first_load = 1;

countries = {
    'fr': "FRANCE",
    "it": "ITALY",
    "uk": "UNITED KINGDOM",
    "nl": "NETHERLANDS"
};


parties = {
    "pvv": {
        "type": "populist",
        "real_name": "Partij voor de Vrijheid"
    },
    "pvda": {
        "type": "moderate left",
        "real_name": "Partij van de Arbeid"
    },
    "vvd": {
        "type": "right liberal",
        "real_name": "Volkspartij voor Vrijheid en Democratie"
    },
    "d66": {
        "type": "left liberal",
        "real_name": "Democraten 66"
    },
    "sp": {
        "type": "Populist left",
        "real_name": "Socialistische Partij"
    },
    "nvu": {
        "type": "extremist",
        "real_name": "Nederlandse Volks-Unie"
    },
    "voorpost": {
        "type": "extremist",
        "real_name": "Voorpost"
    },
    "zwartfront": {
        "type": "extremist",
        "real_name": "Zwart Front"
    },
    "frontnational": {
        "type": "populist",
        "real_name": "Front National"
    },
    "blocidentitaire": {
        "type": "extremist",
        "real_name": "Bloc Identitaire"
    },
    "ndp": {
        "type": "extremist",
        "real_name": "Nouvelle Droite Populaire"
    },
    "mpf": {
        "type": "extremist",
        "real_name": "Mouvement pour la France"
    },
    "ump": {
        "type": "centre-right",
        "real_name": "Union pour un Mouvement Populaire"
    },
    "ps": {
        "type": "centre-left",
        "real_name": "Parti Socialiste"
    },
    "partidelafrance": {
        "type": "extremist",
        "real_name": "Parti de la France"
    },
    "bnp": {
        "type": "populist",
        "real_name": "British National Party"
    },
    "ukip": {
        "type": "populist",
        "real_name": "UK Independence Party"
    },
    "edl": {
        "type": "extremist",
        "real_name": "English Defence League"
    },
    "nationalfront": {
        "type": "extremist",
        "real_name": "National Front"
    },
    "labour": {
        "type": "centre-left",
        "real_name": "Labour Party"
    },
    "conservatives": {
        "type": "centre-right",
        "real_name": "Conservative Party"
    },
    "libdems": {
        "type": "liberals",
        "real_name": "Liberal Democrats"
    },
    "leganord": {
        "type": "populist",
        "real_name": "Lega Nord"
    },
    "frontenazionale": {
        "type": "extremist",
        "real_name": "Fronte Nazionale "
    },
    "forzanuova": {
        "type": "extremist",
        "real_name": "Forza Nuova"
    },
    "casapound": {
        "type": "extremist",
        "real_name": "Casa Pound"
    },
    "fascismoeliberta": {
        "type": "extremist",
        "real_name": "Fascismo e Libertà"
    },
    "ladestra": {
        "type": "extremist",
        "real_name": "la Destra"
    },
    "socialismonazionale": {
        "type": "extremist",
        "real_name": "Socialismo Nazionale"
    },
    "militiachristi": {
        "type": "extremist",
        "real_name": "Militia Christi"
    },
    "fiammatricolore": {
        "type": "extremist",
        "real_name": "Fiamma Tricolore"
    },
    "alternativatricolore": {
        "type": "extremist",
        "real_name": "Alternativa Tricolore"
    },
    "pd": {
        "type": "Center-left",
        "centre-left": "Partito Democratico"
    },
    "forzaitalia": {
        "type": "centre-right",
        "real_name": "Forza Italia"
    },
    "nod": {
        "type": "centre-right",
        "real_name": "Nuovo Centro Destra"
    },
    "sel": {
        "type": "left",
        "real_name": "Sinistra Ecologia Libertà"
    },
    "m5s": {
        "type": "left-populist",
        "real_name": "Movimento 5 Stelle"
    }
}

function show_state(state, option, word) {
    // $('#state_two').empty();
    // $('#state_one').empty();
    // $('#state_three').empty();
    g_word = word;
    if (state == "two") {
        $('#spnCountry').text(countries[country]);
        static_nodes_s2 = [];
        $('#state_two').empty();
        $.getScript("data/" + option + "_state_two1.json", function(all_data) {
            loaded_data = JSON.parse(all_data);
            state = state;
            initialize("#state_two").then(
                function(control) {
                    doTheTreeViz(control);
                }
            );

        });
    } else if (state == "one") {
        $('#state_one').empty();
        $.getScript("data/state_one_normal.json", function(all_data) {
            loaded_data = JSON.parse(all_data);
            initialize("#state_one").then(
                function(control) {
                    doTheTreeViz(control);
                }
            );

        });

    } else {
        // console.log(selected_div);
        $(selected_div).empty();
        $.getScript("data/" + option + "_coc.json", function(all_data) {
            loaded_data = JSON.parse(all_data);
            loaded_data = loaded_data.filter(function(el) {
                return el.name == word;
            });
            initialize(selected_div).then(
                function(control) {
                    doTheTreeViz(control);
                }
            );
            if (first_load) {
                first_load = 0;
                selected_div = "#state_three_two";
                show_state("three", "uk_all", "people");
            }

        });





    }



}

var STATE1 = 1,
    STATE2 = 2,
    STATE3 = 3,
    STATE4 = 4;

var ancor1 = 0;

var state = STATE1;

var divTweets = d3.select(document.getElementById("tweets"));
var toolTip = d3.select(document.getElementById("toolTip"));
var header = d3.select(document.getElementById("head"));
//var header1 = d3.select(document.getElementById("header1"));
//var header2 = d3.select(document.getElementById("header2"));

var fedSpend = d3.select(document.getElementById("fedSpend"));

/*
var itSpend = d3.select(document.getElementById("itSpend"));
var frSpend = d3.select(document.getElementById("frSpend"));
var ukSpend = d3.select(document.getElementById("ukSpend"));
var nlSpend = d3.select(document.getElementById("nlSpend"));

var federalDiv=d3.select(document.getElementById("federalDiv"));
var stateDiv=d3.select(document.getElementById("stateDiv"));
var localDiv=d3.select(document.getElementById("localDiv"));
*/

function doTheTreeViz(control) {
    var svg = control.svg;

    var force = control.force;
    force.nodes(control.nodes)
        .links(control.links)

    // Update the links
    var link = svg.selectAll("line.link")
        .data(control.links, function(d) {
            return d.key;
        });

    if ((control.options.focused > 0)) {
        var linkEnter = link.enter().insert("svg:line", ".node")
            .attr("class", "link")
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            })
            .style("stroke-width", function(d) {
                return getrad(d.size);
            })
            .style("stroke", function(d) {
                if (control.divName == "#state_two") {
                    return "black"
                } else {
                    return "white"
                }
            })

    } else {
        // remove the links by adding empty data
        link = svg.selectAll("line.link").data([]);
    }

    // Exit any old links.
    link.exit().remove();



    var node = svg.selectAll("g.node")
        .data(control.nodes, function(d) {
            return d.name;
        });

    node.select("circle")
        .style("fill", function(d) {
            return getColor(d);
        })
        .attr("r", function(d) {
            return getRadius(d);
        })

    var text = node.append("svg:text")
        .attr("dy", ".35em")
        .attr("class", "text")
        .attr("text-anchor", 'middle')
        .text(function(d) {
            return d.name
        })
        .style("font-size", function(d) {
            var radius = getRadius(d);
            return (d.count > 0) ? (Math.min(2 * radius, (2 * radius - 8) / this.getComputedTextLength() * 10) + "px") : (control.options.labelFontSize + "px")
        })

    // Enter any new nodes.
    var nodeEnter = node.enter()
        .append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d) {
            if (d.party && d.name == selected_party) {
                selected_party = 0;
                if (control.divName.indexOf("#state_three") != 0) {
                    if (!control.nodeClickInProgress) {
                        control.nodeClickInProgress = true;
                        setTimeout(function() {
                            if (control.nodeClickInProgress) {
                                control.nodeClickInProgress = false;
                                if (control.options.nodeFocus) {

                                    d.isCurrentlyFocused = !d.isCurrentlyFocused;
                                    if (d.isCurrentlyFocused) {
                                        control.options.focused += 1;
                                    } else {
                                        control.options.focused -= 1;
                                    }

                                    doTheTreeViz(makeFilteredData(control));
                                }
                            }
                        }, control.clickHack);
                    }
                }
            }
            return "translate(" + d.x + "," + d.y + ")";
        })
        .on("dblclick", function(d) {
            if (control.divName.indexOf("#state_three") != 0) {
                if (!control.nodeClickInProgress) {
                    control.nodeClickInProgress = true;
                    setTimeout(function() {
                        if (control.nodeClickInProgress) {
                            control.nodeClickInProgress = false;
                            if (control.options.nodeFocus) {

                                d.isCurrentlyFocused = !d.isCurrentlyFocused;
                                if (d.isCurrentlyFocused) {
                                    control.options.focused += 1;
                                } else {
                                    control.options.focused -= 1;
                                }

                                doTheTreeViz(makeFilteredData(control));
                            }
                        }
                    }, control.clickHack);
                }
            }
        })
        .on("click", function(d) {
            if (control.divName == "#state_one") {
                if (d.party) {
                    // $('body').scrollTo('#state_two', {
                    //     'duration': 2000
                    // });

                    if (d.name == "ITALY") {
                        party = 0;
                        country = "it";
                        show_state("two", "it", "");
                        // show_state("three","it_all",g_word);

                    }
                    if (d.name == "UNITED KINGDOM") {
                        party = 0;
                        country = "uk";
                        show_state("two", "uk", "");
                        // show_state("three","uk_all",g_word);
                    }
                    if (d.name == "FRANCE") {
                        party = 0;
                        country = "fr";
                        show_state("two", "fr", "");
                        // show_state("three","fr_all",g_word);
                    }
                    if (d.name == "NETHERLANDS") {
                        party = 0;
                        country = "nl";
                        show_state("two", "nl", "");
                        // show_state("three","nl_all",g_word);
                    }
                }
                // else{
                //      $('body').scrollTo('#state_three_one',{'duration':2000});

                //     if(country){
                //         show_state("three",country+"_all",d.name);
                //     }
                //     else{
                //          show_state("three","all",d.name);
                //     }
                // }
            } else if (control.divName == "#state_two") {
                // $('body').scrollTo('#state_three_one', {
                //     'duration': 2000
                // });

                if (!d.party) {
                    if (party) {
                        show_state("three", party + "_all", d.name);
                    } else {
                        show_state("three", country + "_all", d.name);
                    }
                } else {
                    party = d.name;
                    show_state("three", party + "_all", g_word);
                }
            }

            d3.event.stopPropagation();


            // this is a hack so that click doesnt fire on the1st click of a dblclick
            //control.nodeClickInProgress = false;
            //if (d.url) window.open(d.url);
        })
        .call(force.drag);

    g = nodeEnter.append("g")

    // var m = 10,
    //     r = 100,
    //     z = d3.scale.category20c();

    // g.selectAll("path")
    //     .data(d3.layout.pie(function(d) {
    //         console.log(d);
    //         return [1, 10, 5];
    //     }))
    //     .enter().append("svg:path")
    //     .attr("d", d3.svg.arc()
    //         .innerRadius(0)
    //         .outerRadius(function(d) {
    //             console.log(d);
    //             return 100;
    //         }))
    //     .style("fill", function(d, i) {
    //         return "#E32020";
    //     });

    g.append("svg:circle")
        .attr("r", function(d) {
            return getRadius(d);
        })
        .style("fill", function(d) {
            return getColor(d);
        })
        .on("mouseover", function(d) {
            node_onMouseOver(d);
        })
        .on("mouseout", function(d) { // when the mouse leaves a circle, do the following
            toolTip.transition() // declare the transition properties to fade-out the div
            .duration(500) // it shall take 500ms
            .style("opacity", "0"); // and go all the way to an opacity of nil
            divTweets.transition()
                .duration(500)
                .style("opacity", "0");
        });

    function enhanceNode(selectedNode) {
        link.filter(function(d) {
            return d.source.key == selectedNode.key || d.target.key == selectedNode.key;
        })
            .style("stroke", control.options.routeFocusStroke)
        //.style("stroke-width", control.options.routeFocusStrokeWidth);

        if (text) {
            text.filter(function(d) {
                return areWeConnected(selectedNode, d);
            })
                .style("fill", control.options.routeFocusStroke);
        }
    }

    function areWeConnected(node1, node2) {
        for (var i = 0; i < control.data.links.length; i++) {
            var lnk = control.data.links[i];
            if ((lnk.source.key === node1.key && lnk.target.key === node2.key) ||
                (lnk.source.key === node2.key && lnk.target.key === node1.key)) return lnk;
        }
        return null;
    }

    function findMylink(node1) {
        for (var i = 0; i < control.data.links.length; i++) {
            var lnk = control.data.links[i];
            if ((lnk.source.name === node1.name)) return lnk;
        }
        return null;
    }

    function node_onMouseOver(d) {
        if (control.divName.indexOf("#state_one") == 0) {
            // state one
            if (!d.party) {
                toolTip.transition()
                    .duration(200)
                    .style("opacity", ".9");
            }
        } else {
            toolTip.transition()
                .duration(200)
                .style("opacity", ".9");
        }
        divTweets.transition()
            .duration(500)
            .style("opacity", "0");
        //header.text(d["source_Level1"]);
        header.text(d.name);
        if (control.divName.indexOf("#state_two") == 0) {
            if (d.party) {
                header.text(parties[d.name].real_name);
            }
        }
        //header1.text((d.depth > 1) ? d["source_Level2"] : "");
        //header1.text("text1");
        //header2.html((d.depth > 2) ? d["source_Level3"] : "");
        //header2.html("text2");
        //if (d.depth > 3) header2.html(header2.html() + " - "  + d["source_Level4"]);


        //total count info
        if (control.divName == "#state_one") {
            fedSpend.text(d.real_freq);
        } else {
            fedSpend.text(d.count);
        }
        //alert(d.colours[0].colour); alert(d.colours[0].count);
        //alert(d.colours.length);
        //clear all

        /*
		itSpend.text("10");
		frSpend.text("20");
		ukSpend.text("30");
		nlSpend.text("40");
		*/
        /*for (var i=0;i < d.colours.length; i++)
		{
			if(d.colours[i].colour == "ITALY") { itSpend.text(d.colours[i].count); }
			if(d.colours[i].colour == "FRANCE") { frSpend.text(d.colours[i].count); }
			if(d.colours[i].colour == "UNITED KINGDOM") { ukSpend.text(d.colours[i].count); }
			if(d.colours[i].colour == "NETHERLANDS") { nlSpend.text(d.colours[i].count); }
		}*/
        //stateSpend.text(d.colours[0].count);
        //localSpend.text(d.colours[1].count);
        d3.select(document.getElementById("federalDiv")).style("display", "inline");
        if (control.divName == "#state_one") {
            fedSpend.text(d.real_freq);
        } else {
            if (!d.party || (control.divName.indexOf("#state_three") == 0)) fedSpend.text(d.count);
            else {
                //test side
                d3.select(document.getElementById("federalDiv")).style("display", "none");
                d3.select(document.getElementById("head")).text = "Cristina"; //parties[d.name].real_name; // d.party is not working, it's not displaying the whole party name
                //alert(d3.select(document.getElementById("head")).text);
                //fedSpend.text("test");
            }
        }
        toolTip.style("left", (d3.event.pageX + 15) + "px")
            .style("top", (d3.event.pageY - 75) + "px");
        lnky = findMylink(d);
        if (lnky) {
            show_tweets(d.name + " " + lnky.target.name);
        } else {
            show_tweets(d.name);
        }
    }

    function show_tweets(query_string) {
        if (control.divName.indexOf("#state_three") == 0) {
            divTweets.transition()
                .duration(200)
                .style("opacity", ".9");
        }
        var request = {
            "query": {
                "query_string": {
                    "default_field": "text",
                    "query": query_string
                }
            },
            "size": 100
        };

        $("#message").append('<p class="lead" style="text-align:center; color:grey;">Please wait while we load the data...</p>');


        $.post("http://141.138.194.193:9200/infovis_twitter/status/_search",
            JSON.stringify(request),
            function(response) {
                $("#tweets").empty();
                $("#tweets2").empty();
                $("#tweets3").empty();
                var tweets = response.hits.hits
                var uniquetweets = [];
                $.each(tweets, function(i, el) {
                    if ($.inArray(el._source.text, uniquetweets) === -1) uniquetweets.push(el._source.text);
                });

                for (var i in uniquetweets) {
                    if (parseInt(i) < 10) {
                        // console.log(i);
                        d = uniquetweets[i];
                        //$( "#tweets" ).append('<a href=\"#\" class=\"list\"> <div class=\"list-content\"><img src=\"pics/twitter.png\" alt=\"Twitter\" width="\20px\" height=\"20px\" class=\"icon\"><div class=\"data\"><span class=\"list-title\">'+d+'</span></div></div></a>');
                        $("#tweets").append('<a href=\"#\" class=\"list\"> <div class=\"list-content\"><img src=\"pics/twitter.png\" alt=\"Twitter\" width="\20px\" height=\"20px\" class=\"icon\">' + d + '</div></a>');

                    }
                    /*if(parseInt(i)>=10 && parseInt(i)<20 ){
                console.log(i);
				d = uniquetweets[i];
				$( "#tweets2" ).append('<a  href=\"#\" class=\"list\"> <div class=\"list-content\"><img src=\"twitter.png\" class=\"icon\"><div class=\"data\"><span class=\"list-title\">'+d+'</span></div></div></a>');
				
			  }
			  if(parseInt(i)>=20 && parseInt(i)<30){
				console.log(i);
				d = uniquetweets[i];
				$( "#tweets3" ).append('<a  href=\"#\" class=\"list\"> <div class=\"list-content\"><img src=\"twitter.png\" class=\"icon\"><div class=\"data\"><span class=\"list-title\">'+d+'</span></div></div></a>');
			  } */
                }
            });
        /*divTweets.style("right", "70px")   
				.style("top", "400px"); */
        if (control.divName == "#state_three_one") {
            divTweets.style("left", "800px")
                .style("top", "100px")
                .style("overflow", "hidden");
        } else {
            divTweets.style("left", "100px")
                .style("top", "100px")
                .style("overflow", "hidden");
        }
    }

    function resetNode(selectedNode) {
        link.style("stroke", control.options.routeStroke)
        //.style("stroke-width", control.options.routeStrokeWidth);
        if (text) {
            text.style("fill", control.options.routeStroke);
        }
    }

    if (control.options.nodeLabel) {
        var rect = nodeEnter.append('rect')
        //.attr("stroke", "orange")
        //.attr("stroke-width", 10)
        .style('fill', function(d) {
            return getColor(d);
        })
            .style("stroke", function(d) {
                return d3.rgb(getColor(d)).brighter(1);
            })
            .style("stroke-width", 3)
            .attr('width', function(d) {
                if (d.count <= 0) {
                    width = getPixelDims(control.scratch, d.name).width + 20;
                } else {
                    width = 0
                };
                return width;
            })
            .attr('height', function(d) {
                if (d.count <= 0) {
                    height = getPixelDims(control.scratch, d.name).height + 10;
                } else {
                    height = 0
                };
                return height;
            })
            .attr('x', function(d) {
                if (d.count <= 0) {
                    width = getPixelDims(control.scratch, d.name).width + 20;
                } else {
                    width = 0
                };
                return -width / 2;
            })


        // .attr('x', function(d) {
        //     var x = (d.right || d.count > 0) ?
        //         control.options.labelOffset - 10 :
        //         (-d.dim.width - control.options.labelOffset - 10);
        //     return x;
        // })
        .attr('y', -13)
        // .attr('transform', 'translate(' + (-width / 2) + ',0)')

        // // country colors
        // if (d.name == "ITALY") {
        //     return "#FCC89E";
        // } //it
        // else if (d.name == "FRANCE") {
        //     return "#556BA0";
        // } //fr
        // else if (d.name == "NETHERLANDS") {
        //     return "#FBFC5E";
        // } //nl
        // else {
        //     return '#EA6062';
        // }
        // }) //uk
        //.attr('stroke', 'black');

        var text = nodeEnter.append("svg:text")
        // .attr("dx", function(d) {
        //     if (d.count <= 0) {
        //         width = getPixelDims(control.scratch, d.name).width + 20;
        //         if (d.right) {
        //             width = -width
        //         }
        //     } else {
        //         width = 0
        //     };
        //     return -width / 2;
        // })
        .attr("dy", ".35em")
            .attr("class", "text")
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.name
            })
            .style("font-size", function(d) {
                var radius = getRadius(d);
                return (d.count > 0) ? (Math.min(2 * radius, (2 * radius - 8) / this.getComputedTextLength() * 10) + "px") : (control.options.labelFontSize + "px")
            })

        .on("mouseover", function(d) {
            node_onMouseOver(d);
        })
            .on("mouseout", function(d) { // when the mouse leaves a circle, do the following
                toolTip.transition() // declare the transition properties to fade-out the div
                .duration(500) // it shall take 500ms
                .style("opacity", "0"); // and go all the way to an opacity of nil
            });
    }

    // Exit any old nodes.
    node.exit().remove();
    control.link = svg.selectAll("line.link");
    control.node = svg.selectAll("g.node");
    force.on("tick", tick)
        .start();

    if (control.options.linkName) {
        link.append("title")
            .text(function(d) {
                return d[control.options.linkName];
            });
    };


    function tick() {
        //perform collision detection parameter sent determines how aggressively to avoid collisions

        node.each(collide(0.2))
            .attr("transform", function(d) {


                if (d.isCurrentlyFocused && d.party) {
                    d.x = control.options.width / 2;
                    d.y = control.options.height / 2;
                }

                return "translate(" + d.x + "," + d.y + ")";
            });
        link.attr("x1", function(d) {
            return d.source.x;
        })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });
    }
    var padding = 5;
    var party_radius = 65;
    var maxRadius = getRadius(control.options.maxcount);
    // Resolve collisions between nodes.
    function collide(alpha) {

        var quadtree = d3.geom.quadtree(control.nodes);
        return function(d) {


            var rd = getRadius(d);
            if (d.y < rd) {
                d.y = rd;
            }
            if (d.y + rd > control.options.height) {
                d.y = control.options.height - rd;
            }
            if (d.x < rd) {
                d.x = rd;
            }
            if (d.x + rd > control.options.width) {
                d.x = control.options.width - rd;
            }

            var r = ((rd > 0) ? rd : party_radius) + maxRadius + padding,
                nx1 = d.x - r,
                nx2 = d.x + r,
                ny1 = d.y - r,
                ny2 = d.y + r;
            quadtree.visit(function(quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== d)) {
                    var rrd = getRadius(d);
                    var qrd = getRadius(quad.point);
                    var x = d.x - quad.point.x,
                        y = d.y - quad.point.y,
                        l = Math.sqrt(x * x + y * y),
                        r = ((rrd > 0) ? rrd : party_radius) + ((qrd > 0) ? qrd : party_radius) + padding;
                    if (l < r) {
                        l = (l - r) / l * alpha;
                        d.x -= x *= l;
                        d.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });

            if (control.divName == "#state_one" && d.party) {
                if (d.name == "ITALY") {
                    d.x = 200;
                    d.y = control.options.height / 2;
                }
                if (d.name == "NETHERLANDS") {
                    d.x = control.options.width - 200;
                    d.y = control.options.height / 2;
                }
                if (d.name == "UNITED KINGDOM") {
                    d.x = control.options.width / 2;
                    d.y = 100;
                }
                if (d.name == "FRANCE") {
                    d.x = control.options.width / 2;
                    d.y = control.options.height - 100;
                }

            }
            if (control.divName.indexOf("#state_three") == 0 && !d.party) {
                d.x = control.options.width / 2;
                d.y = control.options.height / 2;
            }

            if (control.divName == "#state_two") {
                var radius = 300;
                var numElements = static_nodes_s2.length,
                    angle = 0
                    step = (2 * Math.PI) / numElements;
                for (var i = 0; i < numElements; i++) {
                    static_nodes_s2[i].x = control.options.width / 2 + radius * Math.cos(angle);
                    static_nodes_s2[i].y = control.options.height / 2 + radius * Math.sin(angle);
                    angle += step;
                }
            }



        };
    }

    function getRadius(d) {
        if (d.count == 0) {
            return 0
        } else {
            return makeRadius(control, d)
        };
    }

    function getColor(d) {
        if (control.divName == "#state_two" || control.divName.indexOf("#state_three") == 0) {
            return control.color(countries[country]);
        } else
            return control.options.nodeFocus && d.isCurrentlyFocused ? d3.rgb(control.color(d.colour)).darker(0.5) : control.color(d.colour);
    }

    function getrad(count) {
        return control.options.scaleit(count) / 3;
    }

}

function makeRadius(control, d) {
    // var r = control.options.radius * (control.options.nodeResize ? Math.sqrt(d[control.options.nodeResize]) / Math.PI : 1);
    return control.options.scaleit(d.count);
}

function makeFilteredData(control, selectedNode) {
    // we'll keep only the data where filterned nodes are the source or target
    var newNodes = [];
    var newLinks = [];

    for (var i = 0; i < control.data.links.length; i++) {
        var link = control.data.links[i];
        if (link.target.isCurrentlyFocused || link.source.isCurrentlyFocused) {
            newLinks.push(link);
            addNodeIfNotThere(link.source, newNodes);
            addNodeIfNotThere(link.target, newNodes);
        }
    }
    // if none are selected reinstate the whole dataset
    if (newNodes.length > 0) {
        control.links = newLinks;
        control.nodes = newNodes;
    } else {
        control.nodes = control.data.nodes;
        control.links = control.data.links;
    }
    return control;

    function addNodeIfNotThere(node, nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].key == node.key) return i;
        }
        return nodes.push(node) - 1;
    }
}

function getPixelDims(scratch, t) {
    // scratch is an elemen with the correct styling, t is the text to be counted in pixels
    scratch.empty();
    scratch.append(document.createTextNode(t));
    return {
        width: scratch.outerWidth(),
        height: scratch.outerHeight()
    };
}


function initialize(div_name) {

    var initPromise = $.Deferred();
    var control = {};
    control.divName = div_name;

    var newoptions = {
        nodeLabel: "label",
        nodeResize: "count",
        height: $(window).height(),
        nodeFocus: true,
        radius: 5,
        charge: 0
    };
    // defaults
    control.options = $.extend({
        stackHeight: 12,
        scaleit: d3.scale.sqrt(),
        scalelink: d3.scale.sqrt(),
        scaleGrav: d3.scale.sqrt(),
        maxcount: 0,
        maxlink: 0,
        focused: 0,
        radius: 5,
        fontSize: 14,
        labelFontSize: 15,
        labelLineSpacing: 2.5,
        nodeLabel: null,
        markerWidth: 0,
        markerHeight: 0,
        width: $(control.divName).outerWidth(),
        gap: 1.5,
        nodeResize: "",
        linkDistance: 20,
        charge: 0,
        styleColumn: null,
        styles: null,
        linkName: null,
        nodeFocus: true,
        nodeFocusRadius: 25,
        nodeFocusColor: "LightGray",
        labelOffset: 5,
        gravity: 0.1,
        routeFocusStroke: "Red",
        routeFocusStrokeWidth: 3,
        circleFill: "Fuchsia",
        routeStroke: "Black",
        routeStrokeWidth: 1,
        height: $(control.divName).outerHeight()

    }, newoptions);

    var options = control.options;
    options.gap = options.gap * options.radius;
    control.width = options.width;
    control.height = options.height;
    // this is an element that can be used to determine the width of a text label

    control.scratch = $(document.createElement('span'))
        .addClass('shadow')
        .css('display', 'none')
        .css("font-size", control.options.labelFontSize + "px");
    $('body').append(control.scratch);

    getTheData(control).then(function(data) {

        control.data = data;
        control.nodes = data.nodes;
        control.links = data.links;
        //control.color = d3.scale.category10();
        control.color = d3.scale.ordinal()
            .domain(['NETHERLANDS', 'ITALY', 'FRANCE', 'UNITED KINGDOM'])
            .range(["#FAB333", "#9FF781", '#6B8BFF', '#E780DC']); /* circle colors */
        control.clickHack = 200;

        control.svg = d3.select(control.divName)
            .append("svg:svg")
            .attr("width", "100%")
            .style("background-color",
                function() {
                    if (control.divName == "#state_two") {
                        return "#eee";
                    } else return 'black';
                }) //100% of the div size

        .attr("height", $(window).height())
            .attr("pointer-events", "all") // for zoom funtionality
        .call(d3.behavior.zoom().scaleExtent([0.2, 5]).on("zoom", redraw)) //scaleExtent determines [min,max] zoom scales
        .on("dblclick.zoom", null) //disable double click to zoom
        .append('svg:g');


        //For the zoom function 
        function redraw() {
            control.svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
        }


        //Controls the force layout simulation:
        //  linkDistance is the nominal length of the link
        //  linStrength is how ridig is the link (i.e. how strechy... 1=ridig, 0=flexible)
        //  charge makes the node either repel (charge<0) or attract (charge>0) other nodes
        //  gravity is an attractive force towards the center of the cavas affecting all nodes 
        control.force = d3.layout.force().
        size([control.width, control.height])
            .linkDistance(function(d) {
                if (control.divName == "#state_two")
                    return 0;
                else
                    return 200 * (1 - control.options.scalelink(d.size));
            })
            .linkStrength(function(d) {
                if (control.divName == "#state_two")
                    return 1 * (control.options.scalelink(d.size));
                else
                    return 1;
            })
            .charge(0)
            .gravity(0);

        //when done return control
        initPromise.resolve(control);
    });
    return initPromise.promise();
}

function getTheData(control) {
    var massage = $.Deferred();
    massage.resolve(dataMassage(control, loaded_data));
    return massage.promise();
}

function dataMassage(control, data) {

    var ind = data,
        nodes = [],
        links = [];
    control.options.maxcount = 0;
    control.options.maxlink = 0;


    // the tags are to be circles
    for (var i = 0; i < ind.length; i++) {
        //set the release position of the balls this is important so that they all have an equal chance of reaching the parties/countries
        ind[i].x = control.options.width / 2;
        ind[i].y = control.options.height / 2;
        ind[i].isCurrentlyFocused = false;
        nodes.push(ind[i]);
        ind[i].colour = 'UNITED KINGDOM'; //default colour for the nodes
        //make a note of maximum counts
        ind[i].maxLink = 0;
        control.options.maxcount = Math.max(control.options.maxcount, ind[i].count);
        // console.log(ind[i].name);
        // add links to pages
        //console.log(ind[i]);
        for (var j = 0; j < ind[i].pages.length; j++) {
            //push this page as a node
            //convert for alternative realdatastate1.json
            if (control.divName == "#state_one") {
                for (var key in ind[i].pages[j]) {
                    ind[i].pages[j].name = ind[i].pages[j].key = key;
                    ind[i].pages[j].count = ind[i].pages[j][key];
                }
            }
            //make a note of maximum counts
            //save country colour if max
            if (ind[i].pages[j].count > ind[i].maxLink) {
                ind[i].maxLink = ind[i].pages[j].count;
                ind[i].colour = ind[i].pages[j].name;
            }
            //set the country colour
            ind[i].pages[j].colour = ind[i].pages[j].name;
            control.options.maxcount = Math.max(control.options.maxcount, ind[i].pages[j].count);
            control.options.maxlink = Math.max(control.options.maxlink, ind[i].pages[j].count);
            var node = findOrAddPage(control, ind[i].pages[j], nodes);
            node.isCurrentlyFocused = false;
            // create a link
            var link = {
                source: node,
                target: ind[i],
                key: node.key + "_" + ind[i].key,
                size: ind[i].pages[j].count,
                colour: ind[i].pages[j].name
            };
            node.real_count = node.count;
            if (node.party && control.divName.indexOf("#state_three") != 0) {
                node.count = 0;
            };
            links.push(link);
        };
        // console.log(ind[i].name);
        // console.log(ind[i].colour);
    }
    // sort nodes alpha
    nodes.sort(function(a, b) {
        // console.log(a.colour);
        return a.count < b.count; //? -1 : (a.count == b.count ? 0 : 1);
    });

    control.pageCount = 0;
    control.pageRectSize = {
        width: 0,
        height: 0,
        radius: 0
    };

    for (var i = 0; i < nodes.length; i++) {
        page = nodes[i];
        page.group = 0;
        page.dim = getPixelDims(control.scratch, page.name);
        if (page.party) {
            control.pageCount++;
            // this will calculate the width/height in pixels of the largest label
            control.pageRectSize.width = Math.max(control.pageRectSize.width, page.dim.width);
            control.pageRectSize.height = Math.max(control.pageRectSize.height, page.dim.height);
            control.pageRectSize.radius = Math.max(control.pageRectSize.radius, makeRadius(control, page));
            page.group = 1;
        }

    }
    var options = control.options;

    // we're going to fix the nodes that are pages into two columns
    for (var i = 0, c = 0; i < nodes.length; i++) {
        var page = nodes[i];

        if (page.party) {
            if (control.divName == "#state_two") {
                static_nodes_s2.push(page);
            }

            // page.right = (c > control.pageCount / 2 - 1);
            // // y dimension calc same for each column
            // ydistanceBetweenParties = 200;
            // page.y = ((c % (control.pageCount / 2))) * (control.pageRectSize.height + ydistanceBetweenParties) + $(window).height() / 2 - Math.round(control.pageCount / 4) * (control.pageRectSize.height) - (Math.round(control.pageCount / 2) - 1) / 2 * ydistanceBetweenParties;

            // // x based on right or left column
            // page.x = page.right ?
            //     control.width - control.pageRectSize.width - options.labelOffset - 30 : //options.labelOffset ;
            // page.dim.width + options.labelOffset + 30;
            // c++;
        }
    }
    //set the bubble scaling here
    control.options.scaleit = d3.scale.sqrt(),
    control.options.scaleit.range([10, 60]);
    control.options.scaleit.domain([1, control.options.maxcount]);

    //set the bubble gravity here

    control.options.scaleGrav = d3.scale.sqrt(),
    control.options.scaleGrav.range([0, 1]);
    control.options.scaleGrav.domain([0, control.options.maxcount]);

    //set the scaling for link strength here
    control.options.scalelink = d3.scale.sqrt(),
    control.options.scalelink.range([0, 1]);
    control.options.scalelink.domain([0, control.options.maxlink]);
    // console.log("length = " + nodes.length);
    return {
        nodes: nodes,
        links: links
    };


}

function findOrAddPage(control, page, nodes) {
    // console.log("length = " + nodes.length);
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].key === page.key) {
            nodes[i].count++;
            return nodes[i];
        }
    }
    page.party = true;
    if (ancor1 == 0) {
        page.fixed = true;
        ancor1 += 1
    };
    nodes.push(page);
    return nodes[nodes.length - 1];
}
// modify with your proxy and dataurl
// take the raw data and prepare it for d3
// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
// modify with your proxy and dataurl
// take the raw data and prepare it for d3
// function getTheRawData() {
//     // here's a php proxy to make jsonP
//     var proxyUrl = "http://xliberation.com/s/proxyphp.php";
//     //var proxyUrl = "proxyphp.php";
//     var blogOnly = "0B92ExLh4POiZNGJVcS0tRE96Tmc";

//     var fileid = getParameterByName('data') || blogOnly;

//     var dataUrl = "https://googledrive.com/host/" + fileid;
//     // promise will be resolved when done
//     return getPromiseData(dataUrl, proxyUrl);
// }

// no need to touch this
// general deferred handler for getting json data through proxy and creating promise
function getPromiseData(url, proxyUrl) {
    var deferred = $.Deferred();
    var u = proxyUrl + "?url=" + encodeURIComponent(url);
    //u = "state_one.json";
    //u = "RealDataState1.json";
    // u = "data/fr_state_two1.json";
    u = "data/state_one_normal.json";
    //u = "SampleDataState1.json";
    $.getJSON(u, null,
        function(data) {
            deferred.resolve(data);
        })
        .error(function(res, status, err) {
            deferred.reject("error " + err + " for " + url);
        });

    return deferred.promise();
}

function DisplayWord(AddedWord) {
    d3.select("svg").append("svg:circle")
        .style("stroke", "black")
        .style("fill", "grey")
        .attr("r", 50)
        .attr("cx", Math.round(Math.random() * 600))
        .attr("cy", Math.round(Math.random() * 400));
}