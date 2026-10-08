import { createElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Dashicon, Dropdown } from '@wordpress/components';
import icons from './icons.json';

export function IconPicker({ kind, value = '', disabled, onChange }) {
  const fallback = kind === 'topic' ? 'category' : 'book-alt';
  const label = kind === 'topic' ? __('Topic icon', 'ohmylms') : __('Chapter icon', 'ohmylms');
  return (
    <Dropdown
      className="ohmylms-ws-icon-picker"
      popoverProps={{ placement: 'bottom-start', className: 'ohmylms-ws-icon-popover' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          variant="secondary"
          onClick={onToggle}
          disabled={disabled}
          aria-label={label}
          aria-expanded={isOpen}
        >
          <Dashicon icon={value || fallback} aria-hidden="true" />
          {__('Icon', 'ohmylms')}
        </Button>
      )}
      renderContent={({ onClose }) => (
        <div className="ohmylms-ws-icon-options" role="group" aria-label={label}>
          <p>{label}</p>
          <div className="ohmylms-ws-icon-grid">
            {icons.map(({ id, label: title }) => (
              <Button
                key={id}
                variant="tertiary"
                disabled={disabled}
                aria-label={sprintf(__('Choose %s icon', 'ohmylms'), title)}
                title={title}
                aria-pressed={value === id}
                onClick={async () => {
                  if (await onChange(id)) onClose();
                }}
              >
                <Dashicon icon={id} aria-hidden="true" />
                <span>{title}</span>
              </Button>
            ))}
          </div>
          <Button
            variant="tertiary"
            disabled={disabled}
            onClick={async () => {
              if (await onChange('')) onClose();
            }}
          >
            {__('Use default icon', 'ohmylms')}
          </Button>
        </div>
      )}
    />
  );
}
