import Text from '../../01-atoms/Text/Text';
import Pill from '../../01-atoms/Pill/Pill';
import './TagList.scss';
import { useState } from 'react';

interface TagListProps {
  tags: string[] | undefined;
  existingTags: string[];
  onTagDeletion: (tag: string) => void;
  onTagCreation: (tag: string) => void;
  onTagAddition: (tag: string) => void;
}

function TagList({ tags, existingTags, onTagCreation, onTagAddition, onTagDeletion }: TagListProps) {
  const [newTag, setNewTag] = useState('');
  const [showExistingTags, toggleExistingTags] = useState(false);
  const [filteredExistingTags, setFilteredExistingTags] = useState([...existingTags]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.currentTarget.value;
    setNewTag(tag);

    if (tag.trim() !== '') {
      toggleExistingTags(true)
      setFilteredExistingTags([...existingTags.filter(existingTag => existingTag.includes(tag.toLowerCase()))])
    } else {
      toggleExistingTags(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tag = e.currentTarget.value;
      setNewTag(tag);
      onTagAddition(tag);
      reset();
    }
  };

  const handleTagCreation = (newTag: string) => {
    onTagCreation(newTag);
    reset();
  }

  const reset = () => {
    toggleExistingTags(false);
    setNewTag('');
  };

  const getPlaceholder = () => tags?.length === 0 || tags === undefined ? 'Add a new tag...' : '';

  return (
    <div className='m-asset-tags'>
      <ul className='u-list-reset m-asset-tags__tags'>
        {tags?.map(tag =>
          <Pill
            key={tag}
            label={tag}
            tabIndex={0}
            role='button'
            onDelete={() => onTagDeletion(tag)}
          />
        )}
        <li className='m-asset-tags__add-tag'>
          <form action='post' onSubmit={(e) => e.preventDefault()}>
            <label className='u-visually-hidden' htmlFor='new-tag-name'>Add a new tag</label>
            <input
              id='new-tag-name'
              type='text'
              className='text-caption-1'
              autoComplete='off'
              onChange={e => handleChange(e)}
              onKeyDown={e => handleKeyDown(e)}
              value={newTag}
              placeholder={getPlaceholder()}
            />
          </form>
        </li>
      </ul>
      {showExistingTags ? (
        <div className='m-asset-tags__dropdown'>
          <Text as='p' variant='body-3'>Select a tag or create one</Text>
          {filteredExistingTags.length !== 0 ? (
            <ul className='u-list-reset m-asset-tags__existing-tags'>
              {filteredExistingTags.map(tag =>
                <li key={tag}>
                  <button>
                    <Pill label={tag} />
                  </button>
                </li>
              )}
            </ul>
          ) : null}
          {filteredExistingTags.length === 0 ? (
            <button onClick={() => handleTagCreation(newTag)}>
              <Text as='div' variant='caption-1'>
                Create <Pill label={newTag} />
              </Text>
            </button>
          ) : null}
        </div>
      ) : null
      }
    </div>
  )
}

export default TagList;