Dev = new Mongo.Collection("dev");
var visjsobj;
if (Meteor.isClient) {
    Template.country.helpers({
        get_countries: function(){
            dev = Dev.findOne();
            if (dev != undefined) {
                // Assume countries are the same for all datasets
                var countries = Object.keys(dev.gdp).sort();
                var result = [];
                for (var i = 0; i < countries.length; i++) {
                    result.push({
                        country: countries[i]
                    });
                }
                return result;
            } else {
                return [];
            }
        }
    });
    Template.country.events({
        "change .js-select-country": function(event){
            event.preventDefault();
            var country = $(event.target).val();
            Session.set("country", {
                country: country
            });
        }
    });
    Template.gdp.events({
        "click .js-show-gdp-line": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initLineVis(dev.gdp);
            }
        },
        "click .js-show-gdp-bar": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initBarVis(dev.gdp);
            }
        },
        "click .js-show-gdp-points": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initPointsVis(dev.gdp);
            }
        }
    });
    Template.income.events({
        "click .js-show-income-line": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initLineVis(dev.income);
            }
        },
        "click .js-show-income-bar": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initBarVis(dev.income);
            }
        },
        "click .js-show-income-points": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initPointsVis(dev.income);
            }
        }
    });
    Template.reserves.events({
        "click .js-show-reserves-line": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initLineVis(dev.reserves);
            }
        },
        "click .js-show-reserves-bar": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initBarVis(dev.reserves);
            }
        },
        "click .js-show-reserves-points": function(event){
            event.preventDefault();
            dev = Dev.findOne();
            if (dev != undefined) {
                initPointsVis(dev.reserves);
            }
        }
    });
}

function initLineVis(data) {
    if (visjsobj != undefined) {
        visjsobj.destroy();
    }
    raw = data[Session.get("country")["country"]];
    var items = [];
    for (year in raw) {
        items.push({
            x: year,
            y: raw[year]
        });
    }
    var options = {
        style: 'line',
        drawPoints: false
    };
    var container = document.getElementById('visjs');
    visjsobj = new vis.Graph2d(container, items, options);
    visjsobj.fit();
}

function initBarVis(data) {
    if (visjsobj != undefined) {
        visjsobj.destroy();
    }
    raw = data[Session.get("country")["country"]];
    var items = [];
    for (year in raw) {
        items.push({
            x: year,
            y: raw[year]
        });
    }
    var options = {
        style: 'bar',
        drawPoints: false
    };
    var container = document.getElementById('visjs');
    visjsobj = new vis.Graph2d(container, items, options);
    visjsobj.fit();
}

function initPointsVis(data) {
    if (visjsobj != undefined) {
        visjsobj.destroy();
    }
    raw = data[Session.get("country")["country"]];
    var items = [];
    for (year in raw) {
        items.push({
            x: year,
            y: raw[year]
        });
    }
    var options = {
        style: 'points'
    };
    var container = document.getElementById('visjs');
    visjsobj = new vis.Graph2d(container, items, options);
    visjsobj.fit();
}
