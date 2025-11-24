<script setup lang="ts">
import { useDisplay } from 'vuetify';

import ContactCard from '@/components/ContactCard.vue';

const { mdAndUp } = useDisplay();
</script>

<template>
  <h1 class="text-h3">Want to Buy Something?</h1>
  <div class="text-subtitle-1">There's some stuff you should know.</div>

  <VSheet class="pa-3 mb-3 rounded-lg" elevation="3">
    <h2 class="text-h4">Types of Items, Fitness for Purpose, and Warranty</h2>
    <p class="text-body-1">
      Kingbreaker Forge is a hobby/amateur operation. I am not a professional blacksmith/bladesmith,
      nor do I claim to be. Everything I make is done in my spare time, and I do not have access to
      the same tools, materials, or facilities that a professional would have. I also do not have
      the benefit of formal training or the experience that comes from years of making hundreds of
      pieces. As such, the items I make are not intended to be "professional grade" items. They are
      made with the tools, materials, and skills I have at my disposal, and while I strive to make
      them as good as I can, they may not meet the same standards as items made by professionals.
      <em>
        <strong>
          I cannot offer any warranty or guarantee on the performance, durability, or safety of my
          items.
        </strong>
      </em>
    </p>
    <p class="text-body-1">
      That said, there are some things that I strive for, which you can expect from any item marked
      as "buyable". They depend on which "series" the item belongs to, which you can tell based on
      its "serial number" (which you can see on its page).
    </p>

    <VExpansionPanels elevation="3" variant="inset">
      <VExpansionPanel>
        <VExpansionPanelTitle>
          <h3 class="text-h5"><code>F-0000</code> &mdash; Forge Series</h3>
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          <p>
            These items have the <strong>Kingbreaker Forge Standard</strong>. They have a clear
            purpose and vision. Their materials are appropriate for that purpose and vision, and are
            assembled/finished to a reasonable standard. The methods used to produce them are tried
            and true; no weird/experimental stuff went into them. Lastly, they are safety and
            purpose tested throughout the process.
          </p>
          <p>
            The "KB" label means
            <em>
              "I would (or am already) personally using this item for its intended purpose, and I
              believe it is fit for that purpose."
            </em>
          </p>
          <p>
            While <em>no guarantee/warranty comes with these items</em>, I do stand behind them to
            the best of my ability. If you have any issues with one of these items, please reach out
            to me and I will do my best to help you out.
          </p>
        </VExpansionPanelText>
      </VExpansionPanel>

      <VExpansionPanel>
        <VExpansionPanelTitle>
          <h3 class="text-h5"><code>X-0000</code> &mdash; Experimental Series</h3>
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          <p>
            These items are made with experimental methods, materials, or designs. They may not have
            a clear purpose, or have one that is different from "useful to the end owner in a
            practical way". Items in the <code>X</code> series are often made to explore new ideas,
            techniques, or aesthetics. They might also be pieces I made just to practice a specific
            skill, and have lax standards for finish or assembly.
          </p>
          <p>
            They may be made from uncommon/unusual materials (such as rebar).They may not have been
            tested as thoroughly as items in the Forge Series, and as such, their performance,
            durability, and safety are less certain. The "X" label means "This is a neat thing I
            made, but I would not personally regularly use it." That does not mean it is unsafe;
            just that I cannot speak to its long-term performance or suitability for any specific
            purpose.
          </p>
          <p>
            <em>No guarantee/warranty comes with these items</em>. If you get one, treat it as an
            "as-is" product. It's an interesting artifact which shows off my journey as a smith; no
            more, no less.
          </p>
        </VExpansionPanelText>
      </VExpansionPanel>

      <VExpansionPanel>
        <VExpansionPanelTitle>
          <h3 class="text-h5"><code>KB-0000</code> &mdash; Kingbreaker Series</h3>
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          <p>
            These items go above and beyond, and represent the best of what I can do (at the
            particular time I made them). They are made from high-quality materials, assembled and
            finished to a high standard, and designed with both aesthetics and functionality in
            mind. They are intended to be used and enjoyed for their intended purpose.
          </p>
          <p>
            When I make a <code>KB</code> item, I am making it for a specific use, or for a specific
            person. I put extra care and attention into the design, and often take input and
            feedback from the intended user. These items are my "best work", and I stand behind
            them.
          </p>
          <p>
            They still have <em>no guarantee/warranty</em>, but I am more than willing to help out
            with any issues, repair the piece, or even entirely recreate it. A <code>KB</code> piece
            means a direct line to me; I want you to be happy with it, and will do what I can to
            make that happen.
          </p>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </VSheet>

  <VSheet class="pa-3 mb-3 rounded-lg" elevation="3">
    <h2 class="text-h4">Pricing</h2>
    <p class="text-body-1">
      This website is not a storefront. There is no fixed price for any item. Instead, each one is
      priced individually, based on both what went into it (materials, complexity, time spent, etc.)
      and what I believe is a fair market value for it, as compared to work from other forges.
    </p>
    <p>
      Pricing will also vary depending on the "externalities" of the process. Was it a learning
      piece that I would have made anyway, and has little value to me now? Then I may not ask much
      for it. Was it a custom piece, made specifically for a client, with their input and continuing
      feedback? That's more valuable.
    </p>
  </VSheet>

  <VSheet class="pa-3 mb-3 rounded-lg" elevation="3">
    <h2 class="text-h4">Custom Work</h2>
    <p class="text-body-1">
      Only work that is completed or in process is shown on this site. If what you see here inspires
      you, I am also open to custom commissions!
    </p>
    <p>
      Previous commissions (paid or gifted) have included both the item itself, plus consultation on
      its specs, materials, design, decorations, and more. It has also included process updates,
      photos, and videos. If you're truly into it, you could even join me virtually (or in-person,
      if local) for some of the forging/fitting/finishing work.
    </p>
    <p>If you're interested, please reach out!</p>
  </VSheet>

  <VSheet class="pa-3 mb-3 rounded-lg" elevation="3">
    <h2 class="text-h4">How to Order</h2>
    <p class="text-body-1">
      Since (as metioned) this is not a strorefront and Kingbreaker Forge is a hobby operation,
      there is no automated way to order items. If you see something you'd like to buy, please reach
      out to me directly:
    </p>

    <VRow class="d-flex justify-center">
      <VCol :cols="mdAndUp ? 6 : 12">
        <ContactCard />
      </VCol>
    </VRow>
  </VSheet>
</template>

<style lang="scss" scoped>
p {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
