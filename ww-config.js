export default {
  editor: {
    label: {
      en: 'Toaster',
      fr: 'Gestionnaire de Toasts'
    },
    icon: 'bell'
  },
  triggerEvents: [
    {
      name: 'toast-show',
      label: { en: 'On toast show', fr: 'À l\'affichage du toast' },
      event: {
        toast: {}
      }
    },
    {
      name: 'toast-dismiss',
      label: { en: 'On toast dismiss', fr: 'À la fermeture du toast' },
      event: {
        toast: {}
      }
    },
    {
      name: 'toast-action',
      label: { en: 'On toast action', fr: 'À l\'action du toast' },
      event: {
        toast: {},
        action: {},
        index: 0
      }
    }
  ],
  properties: {
    position: {
      label: { en: 'Position', fr: 'Position' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top-left', label: { en: 'Top Left', fr: 'Haut Gauche' } },
          { value: 'top-center', label: { en: 'Top Center', fr: 'Haut Centre' } },
          { value: 'top-right', label: { en: 'Top Right', fr: 'Haut Droite' } },
          { value: 'bottom-left', label: { en: 'Bottom Left', fr: 'Bas Gauche' } },
          { value: 'bottom-center', label: { en: 'Bottom Center', fr: 'Bas Centre' } },
          { value: 'bottom-right', label: { en: 'Bottom Right', fr: 'Bas Droite' } }
        ]
      },
      defaultValue: 'bottom-right',
      bindable: true
    },
    maxToasts: {
      label: { en: 'Maximum toasts', fr: 'Maximum de toasts' },
      type: 'Number',
      defaultValue: 5,
      bindable: true
    },
    pauseOnHover: {
      label: { en: 'Pause on hover', fr: 'Pause au survol' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true
    },
    toastQueue: {
      label: { en: 'Toast queue', fr: 'File d\'attente des toasts' },
      type: 'Array',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              id: {
                label: { en: 'ID', fr: 'ID' },
                type: 'Text',
                bindable: true
              },
              variant: {
                label: { en: 'Variant', fr: 'Variante' },
                type: 'TextSelect',
                options: {
                  options: [
                    { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
                    { value: 'success', label: { en: 'Success', fr: 'Succès' } },
                    { value: 'destructive', label: { en: 'Error', fr: 'Erreur' } },
                    { value: 'warning', label: { en: 'Warning', fr: 'Avertissement' } },
                    { value: 'info', label: { en: 'Info', fr: 'Information' } }
                  ]
                },
                defaultValue: 'default',
                bindable: true
              },
              title: {
                label: { en: 'Title', fr: 'Titre' },
                type: 'Text',
                bindable: true
              },
              description: {
                label: { en: 'Description', fr: 'Description' },
                type: 'Text',
                bindable: true
              },
              htmlContent: {
                label: { en: 'HTML content', fr: 'Contenu HTML' },
                type: 'LongText',
                bindable: true
              },
              duration: {
                label: { en: 'Duration (ms)', fr: 'Durée (ms)' },
                type: 'Number',
                defaultValue: 5000,
                bindable: true
              },
              dismissible: {
                label: { en: 'Dismissible', fr: 'Fermable' },
                type: 'OnOff',
                defaultValue: true,
                bindable: true
              },
              showProgress: {
                label: { en: 'Show progress bar', fr: 'Afficher barre de progression' },
                type: 'OnOff',
                defaultValue: false,
                bindable: true
              },
              icon: {
                label: { en: 'Custom icon', fr: 'Icône personnalisée' },
                type: 'Icon',
                bindable: true
              },
              actions: {
                label: { en: 'Actions', fr: 'Actions' },
                type: 'Array',
                options: {
                  item: {
                    type: 'Object',
                    options: {
                      item: {
                        label: {
                          label: { en: 'Label', fr: 'Libellé' },
                          type: 'Text',
                          bindable: true
                        },
                        variant: {
                          label: { en: 'Variant', fr: 'Variante' },
                          type: 'TextSelect',
                          options: {
                            options: [
                              { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
                              { value: 'outline', label: { en: 'Outline', fr: 'Contour' } },
                              { value: 'secondary', label: { en: 'Secondary', fr: 'Secondaire' } },
                              { value: 'ghost', label: { en: 'Ghost', fr: 'Fantôme' } }
                            ]
                          },
                          defaultValue: 'default',
                          bindable: true
                        },
                        dismissToast: {
                          label: { en: 'Dismiss toast on click', fr: 'Fermer toast au clic' },
                          type: 'OnOff',
                          defaultValue: true,
                          bindable: true
                        }
                      }
                    }
                  }
                },
                bindable: true
              }
            }
          }
        }
      },
      bindable: true
    },
    toastClass: {
      label: { en: 'Toast CSS class', fr: 'Classe CSS du toast' },
      type: 'Text',
      bindable: true
    },
    toastStyle: {
      label: { en: 'Toast style', fr: 'Style du toast' },
      type: 'Text',
      bindable: true
    }
  }
} 