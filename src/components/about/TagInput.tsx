import React, { useState } from 'react';
import { Flex, Text, TagInput, Tag } from '@/once-ui/components';
import styles from './tagInput.module.scss';

interface TagInputProps {
  id: string;
  value: string[];
  onChange: (tags: string[]) => void;
  label?: string;
}

const TagInputComponent: React.FC<TagInputProps> = ({ id, value, onChange, label }) => {
  const [tags, setTags] = useState<string[]>(value);

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag) && tag.trim() !== '') {
      const updatedTags = [...tags, tag];
      setTags(updatedTags);
      onChange(updatedTags);
    }
  };

  const handleRemoveTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    onChange(updatedTags);
  };

  return (
    <Flex direction="column" gap="16" className={styles.tagInputContainer}>
      {label && <Text className={styles.label}>{label}</Text>}
      <TagInput
        id={id}
        value={tags}
        onAdd={handleAddTag}
        onRemove={handleRemoveTag}
        placeholder="Add a tag..."
        aria-label="tag-input"
      />
      <Flex direction="row" gap="8" wrap="wrap">
        {tags.map((tag, index) => (
          <Tag key={index} removable onRemove={() => handleRemoveTag(tag)}>
            {tag}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default TagInputComponent;