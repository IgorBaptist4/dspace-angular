import { Component, Input } from '@angular/core';
import {ItemPageFieldComponent} from '../item-page-field.component';
import {Item} from '../../../../../core/shared/item.model';

@Component({
  selector: 'ds-item-page-generic-uri-field',
  templateUrl: './item-page-generic-uri-field.component.html'
})
/**
 * This component can be used to represent any uri on a simple item page.
 * It is the most generic way of displaying uris
 * It expects 4 parameters: The item, a separator, the metadata keys and an i18n key
 */
export class ItemPageGenericUriFieldComponent extends ItemPageFieldComponent {

    /**
     * The item to display metadata for
     */
    @Input() item: Item;

    /**
     * Separator string between multiple values of the metadata fields defined
     * @type {string}
     */
  @Input() separator: string;

    /**
     * Fields (schema.element.qualifier) used to render their values.
     */
  @Input() fields: string[];

    /**
     * Label i18n key for the rendered metadata
     */
  @Input() label: string;

}
