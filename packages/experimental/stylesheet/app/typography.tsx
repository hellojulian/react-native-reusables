import { ScrollView, View } from 'react-native';
import { BlockQuote, H1, H2, H3, Large, Lead, P } from '~/components/ui/typography';
import { createStyleSheet, useStyles } from '~/styles/stylesheet';

export default function TypographyScreen() {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.maxWLg}>
        <H1>The Rainbow Forest Adventure</H1>
        <View style={styles.p1_5} />
        <P>
          Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers.
          Whiskers loved exploring and discovering new things every day.
        </P>
        <View style={styles.p3} />
        <H2>Whiskers' Discovery</H2>
        <View style={styles.p1_5} />
        <P>
          One day, while hopping through the forest, Whiskers stumbled upon{' '}
          <P style={styles.fontMedium}>a mysterious rainbow-colored flower</P>. The flower had the
          power to make the forest come alive with vibrant colors and happy creatures.
        </P>
        <BlockQuote>
          "Oh, what a wonderful discovery!" exclaimed Whiskers. "I must share this magic with all my
          forest friends!"
        </BlockQuote>
        <View style={styles.p4} />
        <H3>The Colorful Transformation</H3>
        <View style={styles.p0_5} />
        <P>
          Whiskers excitedly gathered all the animals in the forest and showed them the magical
          rainbow flower. The animals were amazed and decided to plant more of these flowers to make
          their home even more magical.
        </P>
        <View style={styles.p1_5} />
        <P>
          As the rainbow flowers bloomed, the entire forest transformed into a kaleidoscope of
          colors. Birds chirped in harmony, butterflies danced in the air, and even the trees swayed
          to the rhythm of the wind.
        </P>
        <View style={styles.p3} />
        <H3>The Enchanted Celebration</H3>
        <View style={styles.p0_5} />
        <P>
          The animals decided to celebrate their enchanted forest with a grand feast. They gathered
          nuts, berries, and fruits from the colorful trees and shared stories of their adventures.
          The joyous laughter echoed through the Rainbow Forest.
        </P>
        <View style={styles.p1_5} />
        <Lead>
          And so, the Rainbow Forest became a place of wonder and happiness, where Whiskers and all
          the animals lived together in harmony.
        </Lead>
        <View style={styles.p3} />
        <H3>The Never-ending Magic</H3>
        <View style={styles.p0_5} />
        <P>
          The magic of the rainbow flowers continued to spread, reaching other parts of the world.
          Soon, forests everywhere became vibrant and alive, thanks to the discovery of Whiskers and
          the enchanted Rainbow Forest.
        </P>
        <View style={styles.p1_5} />
        <Large>
          The moral of the story is: embrace the magic of discovery, share joy with others, and
          watch as the world transforms into a colorful and beautiful place.
        </Large>
        <View style={styles.p3} />
      </View>
    </ScrollView>
  );
}

const stylesheet = createStyleSheet(({ utils }) => {
  return {
    root: {
      padding: utils.space(6),
      alignItems: 'center',
    },
    maxWLg: {
      maxWidth: utils.rem(32),
    },
    p0_5: {
      padding: utils.space(0.5),
    },
    p1_5: {
      padding: utils.space(1.5),
    },
    p3: {
      padding: utils.space(3),
    },
    p4: {
      padding: utils.space(4),
    },
    fontMedium: {
      fontWeight: utils.fontWeight('medium'),
    },
  };
});
