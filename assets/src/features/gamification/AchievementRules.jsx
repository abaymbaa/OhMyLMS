import {createElement} from '@wordpress/element';
import {newAchievementRule, removeAchievementRule, updateAchievementRule} from './model.mjs';

export function createAchievementRules(readRuntime) {
  return function AchievementRules({rules = [], setRules}) {
    const {I: Controls, b: I18n, We: DeleteIcon, lf: AddButton} = readRuntime();
    const fields = [{label: 'Points', value: 'points'}];
    const comparisons = [
      {label: 'Greater than', value: '>'},
      {label: 'Greater than or equal', value: '>='},
      {label: 'Equal', value: '=='},
      {label: 'Less than', value: '<'},
      {label: 'Less than or equal', value: '<='},
    ];
    const updateRule = (index, field, value) => setRules(updateAchievementRule(rules, index, field, value));
    return <Controls.CardWP isBorderless padding="20px" fullWidth>
      <Controls.HeadingWP level="4">{I18n.__('Define Badge Earning Rules', 'ohmylms')}</Controls.HeadingWP>
      <Controls.TextWP>{I18n.__('Define the conditions learners must meet to earn this badge.', 'ohmylms')}</Controls.TextWP>
      <Controls.SpacerWP marginBottom={2} />
      {rules.map((rule, index) => <Controls.FlexWP key={index} align="flex-start" style={{marginBottom: '8px'}}>
        <Controls.FlexItemWP><Controls.SelectWP options={fields} value={rule.dataValue}
          onChange={value => updateRule(index, 'dataValue', value)} style={{minWidth: '180px'}} /></Controls.FlexItemWP>
        <Controls.FlexItemWP><Controls.SelectWP options={comparisons} value={rule.compareSign}
          onChange={value => updateRule(index, 'compareSign', value)} style={{minWidth: '80px'}} /></Controls.FlexItemWP>
        <Controls.FlexItemWP><Controls.InputNumberWP value={rule.compareData} min={0}
          onChange={value => updateRule(index, 'compareData', value)} style={{width: '100px'}} /></Controls.FlexItemWP>
        <Controls.FlexItemWP><Controls.ButtonWP icon={<DeleteIcon />} disabled={rules.length <= 1}
          onClick={() => setRules(removeAchievementRule(rules, index))} /></Controls.FlexItemWP>
      </Controls.FlexWP>)}
      <Controls.FlexWP justify="end" align="center" style={{marginTop: '12px'}}>
        <AddButton label={I18n.__('Add Condition', 'ohmylms')} onClick={() => setRules([...rules, newAchievementRule()])} />
      </Controls.FlexWP>
    </Controls.CardWP>;
  };
}
