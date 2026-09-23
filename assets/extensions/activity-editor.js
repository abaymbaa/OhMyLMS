(function (wp) {
    const el = wp.element.createElement;
    wp.blocks.registerBlockType('ohmylms/activity', {
        apiVersion: 2, title: 'OhMyLMS Activity', icon: 'welcome-learn-more', category: 'widgets',
        attributes: {type: {type: 'string', default: ''}, data: {type: 'string', default: '{}'}},
        edit: function (props) {
            return el('div', wp.blockEditor.useBlockProps(),
                el(wp.components.SelectControl, {label: 'Activity type', value: props.attributes.type,
                    options: [{label: 'Select an activity', value: ''}].concat(Object.keys(ohmylmsActivities).map(id => ({label: ohmylmsActivities[id].label, value: id}))),
                    onChange: type => props.setAttributes({type})}),
                el(wp.components.TextareaControl, {label: 'Activity data (JSON)', value: props.attributes.data,
                    onChange: data => props.setAttributes({data})}));
        }, save: function () { return null; }
    });
})(window.wp);
