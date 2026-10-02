import { createElement, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { CheckboxControl, SelectControl } from '@wordpress/components';
import { flattenTree, skillTree, setPrimarySkill, toggleSupportingSkill } from './model.mjs';

/**
 * Part-level skill attribution: one primary assessed skill per part, plus supporting
 * skills that only inform recommendations.
 */
export function SkillMapEditor({ skills, value, parts = ['p1'], disabled = false, onChange }) {
  const options = flattenTree(skillTree(skills));
  if (!options.length) {
    return <p>{__('Create skills on the Skills page first.', 'ohmylms')}</p>;
  }
  return (
    <fieldset disabled={disabled} className="ohmylms-skill-map">
      {parts.map((part) => {
        const roles = value?.[part] || { primary: 0, supporting: [] };
        return (
          <Fragment key={part}>
            {parts.length > 1 && <h4>{sprintf(__('Part %s', 'ohmylms'), part)}</h4>}
            <SelectControl
              label={__('Primary skill assessed', 'ohmylms')}
              value={String(roles.primary || '')}
              options={[
                { value: '', label: __('— none —', 'ohmylms') },
                ...options.map((skill) => ({
                  value: String(skill.id),
                  label: `${'— '.repeat(skill.depth)}${skill.name}`,
                })),
              ]}
              onChange={(skillId) => onChange(setPrimarySkill(value, part, skillId))}
            />
            <details>
              <summary>{__('Supporting skills (recommendations only)', 'ohmylms')}</summary>
              {options
                .filter((skill) => skill.id !== roles.primary)
                .map((skill) => (
                  <CheckboxControl
                    key={skill.id}
                    label={`${'— '.repeat(skill.depth)}${skill.name}`}
                    checked={roles.supporting.includes(skill.id)}
                    onChange={() => onChange(toggleSupportingSkill(value, part, skill.id))}
                  />
                ))}
            </details>
          </Fragment>
        );
      })}
    </fieldset>
  );
}
