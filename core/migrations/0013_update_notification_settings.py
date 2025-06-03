from django.db import migrations
from django.utils.text import slugify


def create_update_settings(apps, schema_editor):
    CoreSettings = apps.get_model('core', 'CoreSettings')
    CoreSettings.objects.create(
        key=slugify('Available Update Version'),
        name='Available Update Version',
        value=''
    )
    CoreSettings.objects.create(
        key=slugify('Available Update URL'),
        name='Available Update URL',
        value=''
    )


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_default_active_m3u_accounts'),
    ]

    operations = [
        migrations.RunPython(create_update_settings),
    ]
