/* aboutDialog.js
 *
 * Copyright 2020 Martin Abente Lahaye
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const {GObject, Gtk} = imports.gi;


var FlatsealAboutDialog = GObject.registerClass({
    GTypeName: 'FlatsealAboutDialog',
    Properties: {
        contributors: GObject.ParamSpec.string(
            'contributors',
            'contributors',
            'contributors',
            GObject.ParamFlags.READWRITE, ''),
    },
    Template: 'resource:///com/github/tchx84/Flatseal/widgets/aboutDialog.ui',
}, class FlatsealAboutDialog extends Gtk.AboutDialog {
    _init(props) {
        super._init(props);
        const contributors = this.contributors.split('\n');
        this.add_credit_section(_('Contributions by'), contributors);
        this.connect('response', this.response.bind(this));
    }

    response() {
        this.destroy();
    }
});
