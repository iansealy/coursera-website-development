//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

    Meteor.startup(function() {

    });


    Template.playground.helpers({
        "startdac": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.start == 1) {
                    playAll();
                }
            }
            return Session.get('startdac');
        },
        "stopdac": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.start == 0) {
                    stopAll();
                }
            }
            return Session.get('startdac');
        },
        "drums": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.drums == 1) {
                    setVolume(0, starter.slider0volume / 50);
                } else if (starter.drums == 0) {
                    stopOne(0);
                }
            }
            return Session.get('drums');
        },
        "bassline": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.bassline == 1) {
                    setVolume(1, starter.slider1volume / 50);
                } else if (starter.bassline == 0) {
                    stopOne(1);
                }
            }
            return Session.get('bassline');
        },
        "arp": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.arp == 1) {
                    setVolume(2, starter.slider2volume / 50);
                } else if (starter.arp == 0) {
                    stopOne(2);
                }
            }
            return Session.get('arp');
        },
        "cymbal": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.cymbal == 1) {
                    setVolume(3, starter.slider3volume / 50);
                } else if (starter.cymbal == 0) {
                    stopOne(3);
                }
            }
            return Session.get('cymbal');
        },
        "hihat": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.hihat == 1) {
                    setVolume(4, starter.slider4volume / 50);
                } else if (starter.hihat == 0) {
                    stopOne(4);
                }
            }
            return Session.get('hihat');
        },
        "snaredrum": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.snaredrum == 1) {
                    setVolume(5, starter.slider5volume / 50);
                } else if (starter.snaredrum == 0) {
                    stopOne(5);
                }
            }
            return Session.get('snaredrum');
        },
        "bassdrum": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.bassdrum == 1) {
                    setVolume(6, starter.slider6volume / 50);
                } else if (starter.bassdrum == 0) {
                    stopOne(6);
                }
            }
            return Session.get('bassdrum');
        },
        "riff": function() {
            var starter = MusicMachine.findOne();
            if (starter) {
                if (starter.riff == 1) {
                    setVolume(7, starter.slider7volume / 50);
                } else if (starter.riff == 0) {
                    stopOne(7);
                }
            }
            return Session.get('riff');
        },
        "slider0speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider0speed').data('uiSlider').value(slider.slider0speed);
                setSpeed(0, slider.slider0speed / 50);
                return slider.slider0speed;
            }
        },
        "slider0volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider0volume').data('uiSlider').value(slider.slider0volume);
                if (slider.drums == 1) {
                    setVolume(0, slider.slider0volume / 50);
                }
                return slider.slider0volume;
            }
        },
        "slider1speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider1speed').data('uiSlider').value(slider.slider1speed);
                setSpeed(1, slider.slider1speed / 50);
                return slider.slider1speed;
            }
        },
        "slider1volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider1volume').data('uiSlider').value(slider.slider1volume);
                if (slider.bassline == 1) {
                    setVolume(1, slider.slider1volume / 50);
                }
                return slider.slider1volume;
            }
        },
        "slider2speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider2speed').data('uiSlider').value(slider.slider2speed);
                setSpeed(2, slider.slider2speed / 50);
                return slider.slider2speed;
            }
        },
        "slider2volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider2volume').data('uiSlider').value(slider.slider2volume);
                if (slider.arp == 1) {
                    setVolume(2, slider.slider2volume / 50);
                }
                return slider.slider2volume;
            }
        },
        "slider3speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider3speed').data('uiSlider').value(slider.slider3speed);
                setSpeed(3, slider.slider3speed / 50);
                return slider.slider3speed;
            }
        },
        "slider3volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider3volume').data('uiSlider').value(slider.slider3volume);
                if (slider.cymbal == 1) {
                    setVolume(3, slider.slider3volume / 50);
                }
                return slider.slider3volume;
            }
        },
        "slider4speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider4speed').data('uiSlider').value(slider.slider4speed);
                setSpeed(4, slider.slider4speed / 50);
                return slider.slider4speed;
            }
        },
        "slider4volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider4volume').data('uiSlider').value(slider.slider4volume);
                if (slider.hihat == 1) {
                    setVolume(4, slider.slider4volume / 50);
                }
                return slider.slider4volume;
            }
        },
        "slider5speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider5speed').data('uiSlider').value(slider.slider5speed);
                setSpeed(5, slider.slider5speed / 50);
                return slider.slider5speed;
            }
        },
        "slider5volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider5volume').data('uiSlider').value(slider.slider5volume);
                if (slider.snaredrum == 1) {
                    setVolume(5, slider.slider5volume / 50);
                }
                return slider.slider5volume;
            }
        },
        "slider6speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider6speed').data('uiSlider').value(slider.slider6speed);
                setSpeed(6, slider.slider6speed / 50);
                return slider.slider6speed;
            }
        },
        "slider6volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider6volume').data('uiSlider').value(slider.slider6volume);
                if (slider.bassdrum == 1) {
                    setVolume(6, slider.slider6volume / 50);
                }
                return slider.slider6volume;
            }
        },
        "slider7speedVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider7speed').data('uiSlider').value(slider.slider7speed);
                setSpeed(7, slider.slider7speed / 50);
                return slider.slider7speed;
            }
        },
        "slider7volumeVal": function() {
            var slider = MusicMachine.findOne();
            if (slider) {
                Template.instance().$('#slider7volume').data('uiSlider').value(slider.slider7volume);
                if (slider.riff == 1) {
                    setVolume(7, slider.slider7volume / 50);
                }
                return slider.slider7volume;
            }
        },
    });

    Template.playground.events({
        "click button.startButton": function() {
            Session.set('startdac', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    start: 1,
                    drums: 1,
                    bassline: 1,
                    arp: 1,
                    cymbal: 1,
                    hihat: 1,
                    snaredrum: 1,
                    bassdrum: 1,
                    riff: 1,
                }
            });
        },
        "click button.stopButton": function() {
            Session.set('startdac', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    start: 0,
                    drums: 0,
                    bassline: 0,
                    arp: 0,
                    cymbal: 0,
                    hihat: 0,
                    snaredrum: 0,
                    bassdrum: 0,
                    riff: 0,
                }
            });
        },
        "click button.myButton0on": function() {
            Session.set('drums', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    drums: 1
                }
            });
        },
        "click button.myButton0off": function() {
            Session.set('drums', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    drums: 0
                }
            });
        },
        "click button.myButton1on": function() {
            Session.set('bassline', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    bassline: 1
                }
            });
        },
        "click button.myButton1off": function() {
            Session.set('bassline', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    bassline: 0
                }
            });
        },
        "click button.myButton2on": function() {
            Session.set('arp', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    arp: 1
                }
            });
        },
        "click button.myButton2off": function() {
            Session.set('arp', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    arp: 0
                }
            });
        },
        "click button.myButton3on": function() {
            Session.set('cymbal', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    cymbal: 1
                }
            });
        },
        "click button.myButton3off": function() {
            Session.set('cymbal', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    cymbal: 0
                }
            });
        },
        "click button.myButton4on": function() {
            Session.set('hihat', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    hihat: 1
                }
            });
        },
        "click button.myButton4off": function() {
            Session.set('hihat', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    hihat: 0
                }
            });
        },
        "click button.myButton5on": function() {
            Session.set('snaredrum', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    snaredrum: 1
                }
            });
        },
        "click button.myButton5off": function() {
            Session.set('snaredrum', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    snaredrum: 0
                }
            });
        },
        "click button.myButton6on": function() {
            Session.set('bassdrum', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    bassdrum: 1
                }
            });
        },
        "click button.myButton6off": function() {
            Session.set('bassdrum', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    bassdrum: 0
                }
            });
        },
        "click button.myButton7on": function() {
            Session.set('riff', 1);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    riff: 1
                }
            });
        },
        "click button.myButton7off": function() {
            Session.set('riff', 0);
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    riff: 0
                }
            });
        },
    });

    Template.playground.onRendered(function() {
        $('div.hidden').hide();
        var handler;
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider0speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider0speed').data('uiSlider')) {
            $("#slider0speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider0volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider0volume').data('uiSlider')) {
            $("#slider0volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider1speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider1speed').data('uiSlider')) {
            $("#slider1speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider1volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider1volume').data('uiSlider')) {
            $("#slider1volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider2speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider2speed').data('uiSlider')) {
            $("#slider2speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider2volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider2volume').data('uiSlider')) {
            $("#slider2volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider3speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider3speed').data('uiSlider')) {
            $("#slider3speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider3volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider3volume').data('uiSlider')) {
            $("#slider3volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider4speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider4speed').data('uiSlider')) {
            $("#slider4speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider4volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider4volume').data('uiSlider')) {
            $("#slider4volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider5speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider5speed').data('uiSlider')) {
            $("#slider5speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider5volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider5volume').data('uiSlider')) {
            $("#slider5volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider6speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider6speed').data('uiSlider')) {
            $("#slider6speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider6volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider6volume').data('uiSlider')) {
            $("#slider6volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider7speed: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider7speed').data('uiSlider')) {
            $("#slider7speed").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
        handler = _.throttle(function(event, ui) {
            var val = MusicMachine.findOne({});
            MusicMachine.update({
                _id: val._id
            }, {
                $set: {
                    slider7volume: ui.value
                }
            });
        }, 50, {
            leading: false
        });
        if (!this.$('#slider7volume').data('uiSlider')) {
            $("#slider7volume").slider({
                slide: handler,
                range: 'min',
                min: 0,
                max: 100
            });
        }
    });
}

if (Meteor.isServer) {
    if (MusicMachine.find().count() === 0) {
        MusicMachine.insert({
            slider0speed: 50,
            slider0volume: 50,
            slider1speed: 50,
            slider1volume: 50,
            slider2speed: 50,
            slider2volume: 50,
            slider3speed: 50,
            slider3volume: 50,
            slider4speed: 50,
            slider4volume: 50,
            slider5speed: 50,
            slider5volume: 50,
            slider6speed: 50,
            slider6volume: 50,
            slider7speed: 50,
            slider7volume: 50,
        });
    }
}
