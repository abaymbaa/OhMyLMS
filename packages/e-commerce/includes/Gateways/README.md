# Payment Gateway Settings

This directory contains payment gateway implementations for the OhMyLMS e-commerce system.

## Common Settings Method

All payment gateways extend the `PaymentGateway` abstract class, which provides a common `get_setting()` method for retrieving gateway-specific settings.

### Using the get_setting() method

Instead of using `get_option()` directly, payment gateways should use the `get_setting()` method which automatically handles the `ohmylms_{gateway_id}_settings` pattern.

#### Before (Old Pattern)
```php
public function __construct() {
    $this->id = 'my_gateway';
    $this->title = get_option('ohmylms_my_gateway_payment_gateway_title', __('My Gateway', 'ohmylms'));
    $this->enabled = get_option('ohmylms_my_gateway_payment_gateway_enabled', 'no');
    $this->testmode = 'yes' === get_option('ohmylms_my_gateway_payment_gateway_test_mode', 'no');
}
```

#### After (New Pattern)
```php
public function __construct() {
    $this->id = 'my_gateway';
    $this->title = $this->get_setting('title', __('My Gateway', 'ohmylms'));
    $this->enabled = $this->get_setting('enabled', 'no');
    $this->testmode = 'yes' === $this->get_setting('test_mode', 'no');
}
```

### How it works

The `get_setting()` method:

1. First checks for the setting in `ohmylms_{gateway_id}_settings` option
2. Falls back to the default `get_option()` method if not found
3. Returns the default value if neither exists

### Settings Structure

Settings are stored in WordPress options with the pattern:
- Option name: `ohmylms_{gateway_id}_settings`
- Value: An array containing all gateway settings

Example for Stripe gateway:
```php
// Option name: ohmylms_stripe_settings
// Value: array(
//     'enabled' => 'yes',
//     'test_mode' => 'no',
//     'title' => 'Stripe Payment',
//     'publishable_key' => 'pk_test_...',
//     'secret_key' => 'sk_test_...'
// )
```

### Benefits

1. **Consistency**: All gateways use the same pattern for settings
2. **Simplicity**: No need to construct option names manually
3. **Fallback**: Automatically falls back to legacy settings if needed
4. **Maintainability**: Easier to update and maintain gateway settings

### Migration

When updating existing gateways:

1. Replace `get_option('ohmylms_{gateway_id}_payment_gateway_{setting}', $default)` with `$this->get_setting('setting', $default)`
2. Remove the `ohmylms_` and `_payment_gateway_` parts from the setting key
3. Update the `get_settings()` method to use the new field structure

### Example Implementation

```php
class GatewayExample extends PaymentGateway {
    
    public function __construct() {
        $this->id = 'example';
        $this->title = $this->get_setting('title', __('Example Gateway', 'ohmylms'));
        $this->enabled = $this->get_setting('enabled', 'no');
        $this->testmode = 'yes' === $this->get_setting('test_mode', 'no');
        $this->api_key = $this->testmode 
            ? $this->get_setting('sandbox_api_key', '')
            : $this->get_setting('live_api_key', '');
    }
    
    public function get_settings() {
        return array(
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'has_config' => true,
            'subscription_support' => false,
            'settings_fields' => array(
                array(
                    'title' => __('Title', 'ohmylms'),
                    'short_description' => __('Gateway title for checkout', 'ohmylms'),
                    'input_type' => 'text',
                    'default_value' => __('Example Gateway', 'ohmylms'),
                    'option_name' => 'title'
                ),
                array(
                    'title' => __('Test Mode', 'ohmylms'),
                    'short_description' => __('Enable test mode', 'ohmylms'),
                    'input_type' => 'switch',
                    'default_value' => 'no',
                    'option_name' => 'test_mode'
                )
            )
        );
    }
}
``` 